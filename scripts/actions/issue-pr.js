"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestionFullName = exports.getOthers = void 0;
const js_yaml_1 = __importDefault(require("js-yaml"));
const limax_1 = __importDefault(require("limax"));
const octokit_create_pull_request_1 = require("@type-challenges/octokit-create-pull-request");
const locales_1 = require("../locales");
const toUrl_1 = require("../toUrl");
const readme_1 = require("../readme");
const resolve_1 = require("../utils/resolve");
const formatToCode_1 = require("./utils/formatToCode");
const Messages = {
    'en': {
        info: 'Info',
        template: 'Template',
        tests: 'Test Cases',
        issue_reply: '#{0} - Pull Request created.',
        issue_update_reply: '#{0} - Pull Request updated.',
        issue_invalid_reply: 'Failed to parse the issue, please follow the template.',
        pr_auto_translate_tips: 'Auto translated by Google Translate',
    },
    'zh-CN': {
        info: '基本信息',
        template: '题目模版',
        tests: '判题测试',
        issue_reply: '#{0} - PR 已生成',
        issue_update_reply: '#{0} - PR 已更新',
        issue_invalid_reply: 'Issue 格式不正确，请按照依照模版修正',
        pr_auto_translate_tips: '通过谷歌 API 自动翻译',
    },
    'ja': {
        info: '基本情報',
        template: 'テンプレート',
        tests: 'テストケース',
        issue_reply: '#{0} - Pull Request created.',
        issue_update_reply: '#{0} - Pull Request updated.',
        issue_invalid_reply: 'Failed to parse the issue, please follow the template.',
        pr_auto_translate_tips: 'Auto translated by Google Translate',
    },
};
const getOthers = (condition, a, b) => condition ? a : b;
exports.getOthers = getOthers;
const action = async (github, context, core) => {
    const payload = context.payload || {};
    const issue = payload.issue;
    const no = context.issue.number;
    if (!issue)
        return;
    const labels = (issue.labels || [])
        .map((i) => i && i.name)
        .filter(Boolean);
    // create pr for new challenge
    if (labels.includes('new-challenge')) {
        const locale = labels.includes('ja') ? 'ja' : labels.includes('zh-CN') ? 'zh-CN' : 'en';
        const body = issue.body || '';
        const infoRaw = getCodeBlock(body, Messages[locale].info, 'yaml');
        const template = getCodeBlock(body, Messages[locale].template, 'ts');
        const tests = getCodeBlock(body, Messages[locale].tests, 'ts');
        const question = getCommentRange(body, 'question');
        let info;
        try {
            info = js_yaml_1.default.load(infoRaw || '');
        }
        catch (_a) {
            info = null;
        }
        core.info('-----Playload-----');
        core.info(JSON.stringify(context.payload, null, 2));
        // invalid issue
        if (!question || !template || !tests || !info) {
            await updateComment(github, context, Messages[locale].issue_invalid_reply);
            return;
        }
        const { data: user } = await github.rest.users.getByUsername({
            username: issue.user.login,
        });
        // allow user to override the author info when filled in the Issue
        if (!info.author) {
            info.author = info.author || {};
            info.author.github = issue.user.login;
            if (user)
                info.author.name = user.name;
        }
        core.info(`user: ${JSON.stringify(user)}`);
        core.info(`info: ${JSON.stringify(info)}`);
        const quiz = {
            no,
            difficulty: info.difficulty,
            path: '',
            info: {
                [locale]: info,
            },
            template,
            tests,
            readme: {
                [locale]: question,
            },
        };
        core.info('-----Parsed-----');
        core.info(JSON.stringify(quiz, null, 2));
        const { data: pulls } = await github.rest.pulls.list({
            owner: context.repo.owner,
            repo: context.repo.repo,
            state: 'open',
        });
        const existing_pull = pulls.find(i => { var _a; return ((_a = i.user) === null || _a === void 0 ? void 0 : _a.login) === 'github-actions[bot]' && i.title.startsWith(`#${no} `); });
        const dir = `questions/${getQuestionFullName(no, info.difficulty, info.title)}`;
        const userEmail = `${user.id}+${user.login}@users.noreply.github.com`;
        const files = {
            [(0, resolve_1.resolveFilePath)(dir, 'info', 'yml', locale)]: `${js_yaml_1.default.dump(info)}\n`,
            [(0, resolve_1.resolveFilePath)(dir, 'README', 'md', locale)]: `${question}\n`,
            [`${dir}/template.ts`]: `${template}\n`,
            [`${dir}/test-cases.ts`]: `${tests}\n`,
        };
        await (0, octokit_create_pull_request_1.PushCommit)(github, {
            owner: context.repo.owner,
            repo: context.repo.repo,
            base: 'main',
            head: `pulls/${no}`,
            changes: {
                files,
                commit: `feat(question): add #${no} - ${info.title}`,
                author: {
                    name: `${user.name || user.id || user.login}`,
                    email: userEmail,
                },
            },
            fresh: !existing_pull,
        });
        const playgroundURL = (0, toUrl_1.toPlaygroundUrl)((0, formatToCode_1.formatToCode)(quiz, locale), info.tsconfig || {});
        const playgroundBadge = (0, readme_1.toBadgeLink)(playgroundURL, '', (0, locales_1.t)(locale, 'badge.preview-playground'), '3178c6', '?logo=typescript&logoColor=white');
        const createMessageBody = (prNumber) => `${Messages[locale].issue_update_reply.replace('{0}', prNumber.toString())}\n\n${getTimestampBadge()}  ${playgroundBadge}`;
        if (existing_pull) {
            core.info('-----Pull Request Existed-----');
            core.info(JSON.stringify(existing_pull, null, 2));
            await updateComment(github, context, createMessageBody(existing_pull.number));
        }
        else {
            core.info('-----Creating PR-----');
            const { data: pr } = await github.rest.pulls.create({
                owner: context.repo.owner,
                repo: context.repo.repo,
                base: 'main',
                head: `pulls/${no}`,
                title: `#${no} - ${info.title}`,
                body: `This is an auto-generated PR that auto reflect on #${no}, please go to #${no} for discussion or making changes.\n\nCloses #${no}`,
                labels: ['auto-generated'],
            });
            await github.rest.issues.addLabels({
                owner: context.repo.owner,
                repo: context.repo.repo,
                issue_number: pr.number,
                labels: ['auto-generated'],
            });
            core.info('-----Pull Request-----');
            core.info(JSON.stringify(pr, null, 2));
            if (pr)
                await updateComment(github, context, createMessageBody(pr.number));
        }
    }
    else {
        core.info('No matched labels, skipped');
    }
};
async function updateComment(github, context, body) {
    const { data: comments } = await github.rest.issues.listComments({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
    });
    const existing_comment = comments.find(i => { var _a; return ((_a = i.user) === null || _a === void 0 ? void 0 : _a.login) === 'github-actions[bot]'; });
    if (existing_comment) {
        return await github.rest.issues.updateComment({
            comment_id: existing_comment.id,
            issue_number: context.issue.number,
            owner: context.repo.owner,
            repo: context.repo.repo,
            body,
        });
    }
    else {
        return await github.rest.issues.createComment({
            issue_number: context.issue.number,
            owner: context.repo.owner,
            repo: context.repo.repo,
            body,
        });
    }
}
function getCodeBlock(text, title, lang = 'ts') {
    const regex = new RegExp(`## ${title}[\\s\\S]*?\`\`\`${lang}([\\s\\S]*?)\`\`\``);
    const match = text.match(regex);
    if (match && match[1])
        return match[1].toString().trim();
    return null;
}
function getCommentRange(text, key) {
    const regex = new RegExp(`<!--${key}-start-->([\\s\\S]*?)<!--${key}-end-->`);
    const match = text.match(regex);
    if (match && match[1])
        return match[1].toString().trim();
    return null;
}
function getTimestampBadge() {
    return `![${new Date().toISOString()}](https://img.shields.io/date/${Math.round(+new Date() / 1000)}?color=green&label=)`;
}
function getQuestionFullName(no, difficulty, title) {
    return `${String(no).padStart(5, '0')}-${difficulty}-${(0, limax_1.default)(title.replace(/\./g, '-').replace(/<.*>/g, ''), { tone: false })}`;
}
exports.getQuestionFullName = getQuestionFullName;
exports.default = action;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action = async (github, context, core) => {
    const payload = context.payload || {};
    const issue = payload.issue;
    if (!issue)
        return;
    const labels = (issue.labels || [])
        .map((i) => i && i.name)
        .filter(Boolean);
    if (!labels.includes('new-challenge'))
        return;
    // close pull request
    // Leave a message: close by issue
    const no = issue.number;
    const action = payload.action;
    core.info(`action: ${action}`);
    // action: reopened
    // action: closed
    // find pull request
    const { data: pulls } = await github.rest.pulls.list({
        owner: context.repo.owner,
        repo: context.repo.repo,
        state: action === 'closed' ? 'open' : 'closed',
    });
    core.info(`pulls.length ${pulls.length}`);
    core.info(JSON.stringify(pulls));
    const existing_pull = pulls.find(i => {
        var _a;
        return ((_a = i.user) === null || _a === void 0 ? void 0 : _a.login) === 'github-actions[bot]'
            && i.title.startsWith(`#${no} `);
    });
    if (!existing_pull) {
        core.info('existing_pull not exist');
        return;
    }
    core.info(JSON.stringify(context));
    if (context.payload.action === 'reopened') {
        await github.rest.pulls.update(Object.assign(Object.assign({}, context.repo), { pull_number: existing_pull.number, state: 'open' }));
    }
    else {
        // close
        await github.rest.pulls.update(Object.assign(Object.assign({}, context.repo), { pull_number: existing_pull.number, state: 'closed' }));
    }
};
exports.default = action;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslateAllQuizes = exports.translateMarkdown = exports.TranslateQuiz = exports.TranslateQuizByNo = void 0;
const path_1 = __importDefault(require("path"));
const google_translate_open_api_1 = __importDefault(require("google-translate-open-api"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const loader_1 = require("./loader");
const resolve_1 = require("./utils/resolve");
const locales_1 = require("./locales");
async function TranslateQuizByNo(no, from, to) {
    const quiz = await (0, loader_1.loadQuizByNo)(no);
    if (!quiz)
        throw new Error(`Quiz #${no} not founded`);
    return await TranslateQuiz(quiz, from, to);
}
exports.TranslateQuizByNo = TranslateQuizByNo;
async function TranslateQuiz(quiz, from, to) {
    let translatedReadme = await translateMarkdown(quiz.readme[from], from, to);
    if (!translatedReadme)
        throw new Error(`Quiz #${quiz.no} empty translation`);
    translatedReadme = `> ${(0, locales_1.t)(to, 'readme.google-translated')}\n\n${translatedReadme.trim()}`;
    const readmePath = (0, resolve_1.resolveFilePath)(path_1.default.join(loader_1.QUIZ_ROOT, quiz.path), 'README', 'md', to);
    await fs_extra_1.default.writeFile(readmePath, translatedReadme, 'utf-8');
    console.log(`Translated [${quiz.no}] ${from} → ${to} | saved to ${readmePath}`);
}
exports.TranslateQuiz = TranslateQuiz;
async function translateMarkdown(code, from, to) {
    // to replace the code blocks intro a placeholder then feed it into translator
    // then replace back for the results
    const code_blocks = [];
    const source = code
        .replace(/```[\s\S\n]+?```/g, (v) => {
        const placeholder = `__${code_blocks.length}__`;
        code_blocks.push(v);
        return placeholder;
    })
        .replace(/`[\s\S\n]+?`/g, (v) => {
        const placeholder = `__${code_blocks.length}__`;
        code_blocks.push(v);
        return placeholder;
    });
    const { data: rawResult } = await (0, google_translate_open_api_1.default)(source, {
        tld: 'com',
        from,
        to,
    });
    if (!rawResult)
        return;
    const result = rawResult
        .replace(/__\s*?(\d+?)\s*?__/g, (_, i) => code_blocks[+i]);
    return result;
}
exports.translateMarkdown = translateMarkdown;
async function TranslateAllQuizes(from, to) {
    const quizes = await (0, loader_1.loadQuizes)();
    for (const quiz of quizes) {
        if (quiz.readme[to] || !quiz.readme[from]) {
            console.log(`Skipped [${quiz.no}]`);
            continue;
        }
        await TranslateQuiz(quiz, from, to);
    }
}
exports.TranslateAllQuizes = TranslateAllQuizes;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveInfo = exports.loadQuizByNo = exports.loadQuiz = exports.loadQuizes = exports.QUIZ_ROOT = exports.loadInfo = exports.readmeCleanUp = exports.loadLocaleVariations = exports.loadFile = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const fast_glob_1 = __importDefault(require("fast-glob"));
const js_yaml_1 = __importDefault(require("js-yaml"));
const locales_1 = require("./locales");
async function loadFile(filepath) {
    if (fs_extra_1.default.existsSync(filepath))
        return await fs_extra_1.default.readFile(filepath, 'utf-8');
    return undefined;
}
exports.loadFile = loadFile;
async function loadLocaleVariations(filepath, preprocessor = s => s) {
    const { ext, dir, name } = path_1.default.parse(filepath);
    const data = {};
    for (const locale of locales_1.supportedLocales) {
        const file = preprocessor(await loadFile(path_1.default.join(dir, `${name}.${locale}${ext}`)) || '');
        if (file)
            data[locale] = file;
    }
    if (!data[locales_1.defaultLocale]) {
        // default version
        const file = preprocessor(await loadFile(filepath) || '');
        if (file)
            data[locales_1.defaultLocale] = file;
    }
    return data;
}
exports.loadLocaleVariations = loadLocaleVariations;
function readmeCleanUp(text) {
    return text
        .replace(/<!--info-header-start-->[\s\S]*<!--info-header-end-->/, '')
        .replace(/<!--info-footer-start-->[\s\S]*<!--info-footer-end-->/, '')
        .trim();
}
exports.readmeCleanUp = readmeCleanUp;
function loadInfo(s) {
    const object = js_yaml_1.default.load(s);
    if (!object)
        return undefined;
    const arrayKeys = ['tags', 'related'];
    for (const key of arrayKeys) {
        if (object[key]) {
            object[key] = (object[key] || '')
                .toString()
                .split(',')
                .map((i) => i.trim())
                .filter(Boolean);
        }
        else {
            object[key] = undefined;
        }
    }
    return object;
}
exports.loadInfo = loadInfo;
exports.QUIZ_ROOT = path_1.default.resolve(__dirname, '../questions');
async function loadQuizes() {
    const folders = await (0, fast_glob_1.default)('{0..9}*-*', {
        onlyDirectories: true,
        cwd: exports.QUIZ_ROOT,
    });
    const quizes = await Promise.all(folders.map(async (dir) => loadQuiz(dir)));
    return quizes;
}
exports.loadQuizes = loadQuizes;
async function loadQuiz(dir) {
    return {
        no: Number(dir.replace(/^(\d+)-.*/, '$1')),
        difficulty: dir.replace(/^\d+-(.+?)-.*$/, '$1'),
        path: dir,
        info: await loadLocaleVariations(path_1.default.join(exports.QUIZ_ROOT, dir, 'info.yml'), loadInfo),
        readme: await loadLocaleVariations(path_1.default.join(exports.QUIZ_ROOT, dir, 'README.md'), readmeCleanUp),
        template: await loadFile(path_1.default.join(exports.QUIZ_ROOT, dir, 'template.ts')) || '',
        tests: await loadFile(path_1.default.join(exports.QUIZ_ROOT, dir, 'test-cases.ts')),
    };
}
exports.loadQuiz = loadQuiz;
async function loadQuizByNo(no) {
    const folders = await (0, fast_glob_1.default)(`${no}-*`, {
        onlyDirectories: true,
        cwd: exports.QUIZ_ROOT,
    });
    if (folders.length)
        return await loadQuiz(folders[0]);
    return undefined;
}
exports.loadQuizByNo = loadQuizByNo;
function resolveInfo(quiz, locale = locales_1.defaultLocale) {
    var _a, _b, _c, _d;
    const info = Object.assign({}, quiz.info[locales_1.defaultLocale], quiz.info[locale]);
    info.tags = ((_a = quiz.info[locale]) === null || _a === void 0 ? void 0 : _a.tags) || ((_b = quiz.info[locales_1.defaultLocale]) === null || _b === void 0 ? void 0 : _b.tags) || [];
    info.related = ((_c = quiz.info[locale]) === null || _c === void 0 ? void 0 : _c.related) || ((_d = quiz.info[locales_1.defaultLocale]) === null || _d === void 0 ? void 0 : _d.related) || [];
    if (typeof info.tags === 'string')
        // @ts-expect-error
        info.tags = info.tags.split(',').map(i => i.trim()).filter(Boolean);
    return info;
}
exports.resolveInfo = resolveInfo;

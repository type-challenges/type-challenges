"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const loader_1 = require("./loader");
const toUrl_1 = require("./toUrl");
const locales_1 = require("./locales");
const formatToCode_1 = require("./actions/utils/formatToCode");
async function build() {
    const quizes = await (0, loader_1.loadQuizes)();
    const redirects = [];
    // redirect homepage to github repo
    locales_1.supportedLocales.filter(locale => locale !== locales_1.defaultLocale).forEach((locale) => {
        redirects.push([`/${locale}`, `${toUrl_1.REPO}/blob/main/README.${locale}.md`, 302]);
    });
    locales_1.supportedLocales.forEach((locale) => {
        redirects.push([`/raw/${locale}`, (0, toUrl_1.toQuestionsRawREADME)(locale), 302]);
    });
    for (const quiz of quizes) {
        for (const locale of locales_1.supportedLocales) {
            const info = (0, loader_1.resolveInfo)(quiz, locale);
            const code = (0, formatToCode_1.formatToCode)(quiz, locale);
            const url = (0, toUrl_1.toPlaygroundUrl)(code, info.tsconfig || {});
            if (locale === locales_1.defaultLocale) {
                redirects.push([`/${quiz.no}`, (0, toUrl_1.toQuizREADME)(quiz, locale, true), 302]);
                redirects.push([`/${quiz.no}/raw`, (0, toUrl_1.toRawREADME)(quiz, locale), 302]);
                redirects.push([`/${quiz.no}/play`, url, 302]);
                redirects.push([`/${quiz.no}/answer`, (0, toUrl_1.toShareAnswerFull)(quiz), 302]);
            }
            else {
                redirects.push([`/${quiz.no}/${locale}`, (0, toUrl_1.toQuizREADME)(quiz, locale, true), 302]);
                redirects.push([`/${quiz.no}/raw/${locale}`, (0, toUrl_1.toRawREADME)(quiz, locale), 302]);
                redirects.push([`/${quiz.no}/play/${locale}`, url, 302]);
                redirects.push([`/${quiz.no}/answer/${locale}`, (0, toUrl_1.toShareAnswerFull)(quiz, locale), 302]);
            }
        }
        redirects.push([`/${quiz.no}/solutions`, (0, toUrl_1.toSolutionsFull)(quiz.no), 302]);
    }
    const dist = path_1.default.resolve(__dirname, 'dist');
    await fs_extra_1.default.remove(dist);
    await fs_extra_1.default.ensureDir(dist);
    await fs_extra_1.default.writeFileSync(path_1.default.join(dist, '_redirects'), redirects.map(i => i.join('\t')).join('\n'), 'utf-8');
}
exports.build = build;
build();

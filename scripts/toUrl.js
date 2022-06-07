"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHomepageShort = exports.toAnswerShort = exports.toPlayShort = exports.toSolutionsShort = exports.toReadmeShort = exports.toShareAnswerFull = exports.toNearborREADME = exports.toQuestionsRawREADME = exports.toRawREADME = exports.toQuizREADME = exports.toSolutionsFull = exports.toPlaygroundUrl = exports.TYPESCRIPT_PLAYGROUND = exports.DOMAIN = exports.REPO = void 0;
const lz_string_1 = __importDefault(require("lz-string"));
const locales_1 = require("./locales");
const loader_1 = require("./loader");
exports.REPO = 'https://github.com/type-challenges/type-challenges';
exports.DOMAIN = 'https://tsch.js.org';
exports.TYPESCRIPT_PLAYGROUND = 'https://www.typescriptlang.org/play';
// https://github.com/microsoft/TypeScript-Website/tree/v2/packages/playground
function toPlaygroundUrl(code, config = {}, site = exports.TYPESCRIPT_PLAYGROUND) {
    return `${site}?${Object.entries(config).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&')}#code/${lz_string_1.default.compressToEncodedURIComponent(code)}`;
}
exports.toPlaygroundUrl = toPlaygroundUrl;
function toSolutionsFull(no) {
    return `${exports.REPO}/issues?q=label%3A${no}+label%3Aanswer`;
}
exports.toSolutionsFull = toSolutionsFull;
function toQuizREADME(quiz, locale, absolute = false) {
    const prefix = absolute ? `${exports.REPO}/blob/main` : '.';
    return locale && locale !== locales_1.defaultLocale && quiz.readme[locale]
        ? `${prefix}/questions/${quiz.path}/README.${locale}.md`
        : `${prefix}/questions/${quiz.path}/README.md`;
}
exports.toQuizREADME = toQuizREADME;
function toRawREADME(quiz, locale) {
    const provider = 'https://cdn.jsdelivr.net/gh/type-challenges/type-challenges';
    // const provider = 'https://raw.githubusercontent.com/type-challenges/type-challenges/main'
    return locale && locale !== locales_1.defaultLocale && quiz.readme[locale]
        ? `${provider}/questions/${quiz.path}/README.${locale}.md`
        : `${provider}/questions/${quiz.path}/README.md`;
}
exports.toRawREADME = toRawREADME;
function toQuestionsRawREADME(locale) {
    const provider = 'https://cdn.jsdelivr.net/gh/type-challenges/type-challenges';
    return locale && locale !== locales_1.defaultLocale ? `${provider}/README.${locale}.md` : `${provider}/README.md`;
}
exports.toQuestionsRawREADME = toQuestionsRawREADME;
function toNearborREADME(quiz, locale) {
    return locale && locale !== locales_1.defaultLocale && quiz.readme[locale]
        ? `./README.${locale}.md`
        : './README.md';
}
exports.toNearborREADME = toNearborREADME;
function toShareAnswerFull(quiz, locale = locales_1.defaultLocale) {
    const info = (0, loader_1.resolveInfo)(quiz, locale);
    if (locale === locales_1.defaultLocale)
        return `https://github.com/type-challenges/type-challenges/issues/new?labels=answer,${encodeURIComponent(locale)}&template=0-answer.md&title=${encodeURIComponent(`${quiz.no} - ${info.title}`)}`;
    else
        return `https://github.com/type-challenges/type-challenges/issues/new?labels=answer,${encodeURIComponent(locale)}&template=1-answer.${locale}.md&title=${encodeURIComponent(`${quiz.no} - ${info.title}`)}`;
}
exports.toShareAnswerFull = toShareAnswerFull;
// Short
function toReadmeShort(no, locale) {
    return locale !== locales_1.defaultLocale
        ? `${exports.DOMAIN}/${no}/${locale}`
        : `${exports.DOMAIN}/${no}`;
}
exports.toReadmeShort = toReadmeShort;
function toSolutionsShort(no) {
    return `${exports.DOMAIN}/${no}/solutions`;
}
exports.toSolutionsShort = toSolutionsShort;
function toPlayShort(no, locale) {
    return locale !== locales_1.defaultLocale
        ? `${exports.DOMAIN}/${no}/play/${locale}`
        : `${exports.DOMAIN}/${no}/play`;
}
exports.toPlayShort = toPlayShort;
function toAnswerShort(no, locale) {
    return locale !== locales_1.defaultLocale
        ? `${exports.DOMAIN}/${no}/answer/${locale}`
        : `${exports.DOMAIN}/${no}/answer`;
}
exports.toAnswerShort = toAnswerShort;
function toHomepageShort(locale) {
    return locale !== locales_1.defaultLocale
        ? `${exports.DOMAIN}/${locale}`
        : `${exports.DOMAIN}`;
}
exports.toHomepageShort = toHomepageShort;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toInfoHeader = void 0;
const locales_1 = require("../../locales");
const loader_1 = require("../../loader");
const toInfoHeader = function toInfoHeader(quiz, locale) {
    var _a, _b, _c;
    const info = (0, loader_1.resolveInfo)(quiz, locale);
    const author = `${(_a = info.author) === null || _a === void 0 ? void 0 : _a.name} (@${(_b = info === null || info === void 0 ? void 0 : info.author) === null || _b === void 0 ? void 0 : _b.github})`;
    return `${quiz.no} - ${info.title || ''}\n`
        + '-------\n'
        + `by ${author} #${(0, locales_1.t)(locale, `difficulty.${quiz.difficulty}`)} ${((_c = info === null || info === void 0 ? void 0 : info.tags) === null || _c === void 0 ? void 0 : _c.map(i => `#${i}`).join(' ')) || ''}\n\n`
        + `### ${(0, locales_1.t)(locale, 'title.question')}\n\n`;
};
exports.toInfoHeader = toInfoHeader;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatToCode = void 0;
const locales_1 = require("../../locales");
const toCommentBlock_1 = require("./toCommentBlock");
const toInfoHeader_1 = require("./toInfoHeader");
const toLinks_1 = require("./toLinks");
const toDivider_1 = require("./toDivider");
const toFooter_1 = require("./toFooter");
const formatToCode = (quiz, locale) => {
    return `${(0, toCommentBlock_1.toCommentBlock)((0, toInfoHeader_1.toInfoHeader)(quiz, locale)
        + (quiz.readme[locale] || quiz.readme[locales_1.defaultLocale])
        + (0, toLinks_1.toLinks)(quiz, locale))
        + (0, toDivider_1.toDivider)((0, locales_1.t)(locale, 'divider.code-start'))}\n${(quiz.template || '').trim()}\n\n${(0, toDivider_1.toDivider)((0, locales_1.t)(locale, 'divider.test-cases'))}${quiz.tests || ''}\n\n${(0, toDivider_1.toDivider)((0, locales_1.t)(locale, 'divider.further-steps'))}${(0, toCommentBlock_1.toCommentBlock)((0, toFooter_1.toFooter)(quiz, locale))}`;
};
exports.formatToCode = formatToCode;

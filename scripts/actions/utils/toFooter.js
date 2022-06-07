"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFooter = void 0;
const locales_1 = require("../../locales");
const toUrl_1 = require("../../toUrl");
const toFooter = function (quiz, locale) {
    return '\n\n'
        + `> ${(0, locales_1.t)(locale, 'link.share-solutions')}${(0, toUrl_1.toAnswerShort)(quiz.no, locale)}\n`
        + `> ${(0, locales_1.t)(locale, 'link.checkout-solutions')}${(0, toUrl_1.toSolutionsShort)(quiz.no)}\n`
        + `> ${(0, locales_1.t)(locale, 'link.more-challenges')}${(0, toUrl_1.toHomepageShort)(locale)}\n`;
};
exports.toFooter = toFooter;

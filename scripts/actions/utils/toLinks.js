"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLinks = void 0;
const locales_1 = require("../../locales");
const toUrl_1 = require("../../toUrl");
function toLinks(quiz, locale) {
    return '\n\n'
        + `> ${(0, locales_1.t)(locale, 'link.view-on-github')}${(0, toUrl_1.toReadmeShort)(quiz.no, locale)}`;
}
exports.toLinks = toLinks;

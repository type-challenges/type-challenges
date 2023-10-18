"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveFilePath = void 0;
const locales_1 = require("../locales");
function resolveFilePath(dir, name, ext, locale) {
    if (locale === locales_1.defaultLocale)
        return `${dir}/${name}.${ext}`;
    else
        return `${dir}/${name}.${locale}.${ext}`;
}
exports.resolveFilePath = resolveFilePath;

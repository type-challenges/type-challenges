"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.f = exports.t = exports.messages = exports.supportedLocales = exports.defaultLocale = void 0;
exports.defaultLocale = 'en';
exports.supportedLocales = ['en', 'zh-CN', 'ja', 'ko'];
exports.messages = {
    'en': require('./locales/en.json'),
    'zh-CN': require('./locales/zh-CN.json'),
    'ja': require('./locales/ja.json'),
    'ko': require('./locales/ko.json'),
};
function t(locale, key) {
    const result = (exports.messages[locale] && exports.messages[locale][key]) || exports.messages[exports.defaultLocale][key];
    if (!result)
        throw new Error(`Missing message for key "${key}"`);
    return result;
}
exports.t = t;
function f(name, locale, ext) {
    if (locale === exports.defaultLocale)
        return `${name}.${ext}`;
    return `${name}.${locale}.${ext}`;
}
exports.f = f;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readme_1 = require("./readme");
const translate_1 = require("./translate");
async function run() {
    await (0, translate_1.TranslateAllQuizes)('en', 'zh-CN');
    await (0, translate_1.TranslateAllQuizes)('en', 'ja');
    await (0, readme_1.updateREADMEs)();
}
run();

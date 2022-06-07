"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCommentBlock = void 0;
const toCommentBlock = function (text) {
    return `/*\n${text
        .trim()
        .split('\n')
        .map(i => `  ${i}`)
        .join('\n')}\n*/\n\n`;
};
exports.toCommentBlock = toCommentBlock;

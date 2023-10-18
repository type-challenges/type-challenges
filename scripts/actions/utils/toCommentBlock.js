"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCommentBlock = void 0;
const toCommentBlock = function (text) {
    return `/*\n${text
        .trim()
        .split('\n')
        .map(i => i.trim() ? `  ${i}`.trimEnd() : '')
        .join('\n')}\n*/\n`;
};
exports.toCommentBlock = toCommentBlock;

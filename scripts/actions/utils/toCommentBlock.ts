export const toCommentBlock = function (text: string) {
  return `/*\n${
    text
      .trim()
      .split('\n')
      .map(i => i.trim() ? `  ${i}`.trimEnd() : '')
      .join('\n')
  }\n*/\n`
}

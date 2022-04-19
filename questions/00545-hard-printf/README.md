<!--info-header-start--><h1>printf <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><blockquote><p>by null <a href="https://github.com/Bestmain-YS" target="_blank">@Bestmain-YS</a></p></blockquote><p><a href="https://tsch.js.org/545/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

Implement `Format<T extends string>` generic.

For example,

```ts
type FormatCase1 = Format<"%sabc"> // FormatCase1 : string => string
type FormatCase2 = Format<"%s%dabc"> // FormatCase2 : string => number => string
type FormatCase3 = Format<"sdabc"> // FormatCase3 :  string
type FormatCase4 = Format<"sd%abc"> // FormatCase4 :  string
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/545/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/545/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->

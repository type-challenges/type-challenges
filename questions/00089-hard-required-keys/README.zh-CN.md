<!--info-header-start--><h1>Required Keys <img src="https://img.shields.io/badge/-%E5%9B%B0%E9%9A%BE-de3d37" alt="困难"/> <img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/></h1><blockquote><p>by yituan <a href="https://github.com/yi-tuan" target="_blank">@yi-tuan</a></p></blockquote><p><a href="https://tsch.js.org/89/play/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-3178c6?logo=typescript&logoColor=white" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> 由谷歌自动翻译，欢迎 PR 改进翻译质量。

实现高级util类型`RequiredKeys<T>`，该类型将所有必需的键都选择为一个并集。

例如

```ts
type Result = RequiredKeys<{ foo: number; bar?: string }>;
// expected to be “foo”
```

<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://tsch.js.org/89/answer/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://tsch.js.org/89/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <hr><h3>相关挑战</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00005-extreme-readonly-keys/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-5%E3%83%BB%E8%8E%B7%E5%8F%96%E5%8F%AA%E8%AF%BB%E5%AD%97%E6%AE%B5-b11b8d" alt="5・获取只读字段"/></a> <!--info-footer-end-->

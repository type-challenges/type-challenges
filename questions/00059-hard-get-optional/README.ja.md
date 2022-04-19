<!--info-header-start--><h1>Get Optional <img src="https://img.shields.io/badge/-%E4%B8%8A%E7%B4%9A-de3d37" alt="上級"/> <img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/> <img src="https://img.shields.io/badge/-%23infer-999" alt="#infer"/></h1><blockquote><p>by Zheeeng <a href="https://github.com/zheeeng" target="_blank">@zheeeng</a></p></blockquote><p><a href="https://tsch.js.org/59/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript&logoColor=white" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->

オプショナルなフィールドのみを残す高度なユーティリティ型 `GetOptional<T>` を実装してください。

例えば

```ts
type I = GetOptional<{ foo: number, bar?: string }> // expected to be { bar?: string }
```

<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/59/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/59/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <hr><h3>関連する課題</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00057-hard-get-required/README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-57%E3%83%BBGet%20Required-de3d37" alt="57・Get Required"/></a> <!--info-footer-end-->

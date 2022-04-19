<!--info-header-start--><h1>Currying 1 <img src="https://img.shields.io/badge/-%E4%B8%8A%E7%B4%9A-de3d37" alt="上級"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/17/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript&logoColor=white" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->

> この課題ではTypeScript 4.0が推奨されます

[カリー化](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AA%E3%83%BC%E5%8C%96)とは、複数の引数を取る関数を、それぞれの 1 つの引数を取る関数の列に変換するテクニックです。

例えば：

```ts
const add = (a: number, b: number) => a + b
const three = add(1, 2)

const curriedAdd = Currying(add)
const five = curriedAdd(2)(3)
```

`Currying` に渡された関数は複数の引数を持つ場合があり、正しく型を付ける必要があります。

この課題では、カリー化された関数は一度に 1 つの引数しか受け付けません。すべての引数が代入されたら、その結果を返す必要があります。

<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/17/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/17/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <hr><h3>関連する課題</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-14%E3%83%BBFirst%20of%20Array-7aad0c" alt="14・First of Array"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-16%E3%83%BBPop-d9901a" alt="16・Pop"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00462-extreme-currying-2/README.md" target="_blank"><img src="https://img.shields.io/badge/-462%E3%83%BBCurrying%202-b11b8d" alt="462・Currying 2"/></a> <!--info-footer-end-->

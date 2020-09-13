<!--info-header-start--><h1>Currying 1 <img src="https://img.shields.io/badge/-%E4%B8%8A%E7%B4%9A-red" alt="上級"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/> <img src="https://img.shields.io/badge/-%234.0-999" alt="#4.0"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/17/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->

> Googleが翻訳しました。翻訳の改善のためにPRを作成します。

>この課題ではTypeScript 4.0が推奨されます

[Currying]（https://en.wikipedia.org/wiki/Currying）は、複数の引数を取る関数を、それぞれが単一の引数を取る関数のシーケンスに変換する手法です。

例えば：

```ts
const add = (a: number, b: number) => a + b
const three = add(1, 2)

const curriedAdd = Currying(add)
const five = curriedAdd(2)(3)
```

`Currying`に渡される関数には複数の引数が含まれる可能性があるため、正しく入力する必要があります。

この課題では、カレー関数は一度に1つの引数しか受け入れません。すべての引数が割り当てられると、その結果が返されます。

<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/17/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/17/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <hr><h3>関連する課題</h3><a href="https://github.com/type-challenges/type-challenges/tree/master/questions/14-easy-first/README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-14%E3%83%BBFirst%20of%20Array-90bb12" alt="14・First of Array"/></a>  <a href="https://github.com/type-challenges/type-challenges/tree/master/questions/16-medium-pop/README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-16%E3%83%BBPop-eaa648" alt="16・Pop"/></a> <!--info-footer-end-->
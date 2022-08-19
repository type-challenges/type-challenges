<!--info-header-start--><h1>Chainable Options <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%B4%9A-d9901a" alt="中級"/> <img src="https://img.shields.io/badge/-%23application-999" alt="#application"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/12/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript&logoColor=white" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ko.md" target="_blank"><img src="https://img.shields.io/badge/-%ED%95%9C%EA%B5%AD%EC%96%B4-gray" alt="한국어"/></a> </p><!--info-header-end-->

JavaScript では、チェイン可能なオプションがよく使われます。しかし、TypeScript に切り替えたとき、正しく型を付けることができますか？

この課題では、オブジェクトでもクラスでも何でもいいので、 `option(key, value)` と `get()` の 2 つの関数を提供する型を定義してください。`option` では、与えられたキーと値を使って現在の config の型を拡張できます。最終的な結果は `get` で取得することにしましょう。

例えば

```ts
declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// expect the type of result to be:
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}
```

この問題を解くために js/ts のロジックを書く必要はありません。型レベルのロジックだけを書いてください。

`key` は `string` のみを受け付け、`value` は任意の型を受け付けると仮定しても構いません。同じ `key` が 2 回渡されることはありません。

<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/12/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/12/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <!--info-footer-end-->
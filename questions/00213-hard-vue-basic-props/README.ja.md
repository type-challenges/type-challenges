<!--info-header-start--><h1>Vue Basic Props <img src="https://img.shields.io/badge/-%E4%B8%8A%E7%B4%9A-de3d37" alt="上級"/> <img src="https://img.shields.io/badge/-%23vue-999" alt="#vue"/> <img src="https://img.shields.io/badge/-%23application-999" alt="#application"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/213/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript&logoColor=white" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


**この問題は [6 - Simple Vue](//tsch.js.org/6) の続きです。 先にその問題を解いた上で、そこで得られるコードを基盤にしてこの問題に取り組んでください。**

Simple Vue に加え、我々は 新しく `props` フィールドをオプションとして利用できます。これは Vue の `props` オプションを更に簡潔にしたものです。利用するにはいくつかのルールがあります。

`props` は、 `this` に挿入された各々のフィールドをキーをとして保持するオブジェクトです。挿入された props は `data`,`computed`, `methods` などを始めとした 全ての環境からアクセス可能になります。

prop は コンストラクタ、または コンストラクタを含んだ `type` フィールドを持つオブジェクトで定義されます。

例)

```js
props: {
  foo: Boolean
}
// or
props: {
  foo: { type: Boolean }
}
```

これらは `type Props = { foo: boolean }` であると推測されます。

複数の型を渡した場合、Props の型は ユニオン型として推測されます。

```ts
props: {
  foo: { type: [Boolean, Number, String] }
}
// -->
type Props = { foo: boolean | number | string }
```

空のオブジェクトが渡された場合、対象のkeyは `any` 型として推測されます。


より具体的なケースについては, Test Cases セクションを参照してください。

>Vue の `required`, `default`, そして 配列の props はこの問題において考慮されておりません.


<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/213/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/213/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <hr><h3>関連する課題</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00006-hard-simple-vue/README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-6%E3%83%BBSimple%20Vue-de3d37" alt="6・Simple Vue"/></a> <!--info-footer-end-->

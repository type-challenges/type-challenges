<!--info-header-start--><h1>Vue Basic Props <img src="https://img.shields.io/badge/-hard-red" alt="hard"/> <img src="https://img.shields.io/badge/-%23vue-999" alt="#vue"/> <img src="https://img.shields.io/badge/-%23application-999" alt="#application"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/213/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript" alt="Take the Challenge"/></a> </p><!--info-header-end-->


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


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/213/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/213/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <hr><h3>関連する問題</h3><a href="https://github.com/type-challenges/type-challenges/tree/master/questions/6-hard-simple-vue/README.md" target="_blank"><img src="https://img.shields.io/badge/-6%E3%83%BBSimple%20Vue-red" alt="6・Simple Vue"/></a> <!--info-footer-end-->
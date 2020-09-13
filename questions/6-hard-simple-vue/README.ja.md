<!--info-header-start--><h1>Simple Vue <img src="https://img.shields.io/badge/-%E4%B8%8A%E7%B4%9A-red" alt="上級"/> <img src="https://img.shields.io/badge/-%23this-999" alt="#this"/> <img src="https://img.shields.io/badge/-%23application-999" alt="#application"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/6/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->

> Googleが翻訳しました。翻訳の改善のためにPRを作成します。

Vueのようなタイピングサポートの簡易バージョンを実装します。

関数名`SimpleVue`（`Vue.extend`または`defineComponent`に類似）を提供することにより、計算済みおよびメソッド内の`this`型を適切に推測する必要があります。

この課題では、SimpleVueが`data`、`computed`、および`methods`フィールドを持つオブジェクトを、それが唯一の引数であることを前提としています。

-`data`は、コンテキスト`this`を公開するオブジェクトを返す単純な関数ですが、データ自体、または`data`の他のコンピューター値またはメソッドにはアクセスできません。

-`computed`は、コンテキストを`this`として受け取り、計算を行って結果を返す関数のオブジェクトです。計算結果は、関数ではなくプレーンな戻り値としてコンテキストに公開する必要があります。

-`methods`は、コンテキストを`this`としても取る関数のオブジェクトです。メソッドは、`data`、`computed`、および他の`methods`によって公開されるフィールドにアクセスできます。 `computed`の違いは、`methods`が関数としてそのまま公開されることです。

`SimpleVue`の戻り値の型は任意です。

```ts
const instance = SimpleVue({
  data() {
    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return this.firstname + ' ' + this.lastname
    }
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase())
    }
  }
})
```

<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/6/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/6/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <!--info-footer-end-->
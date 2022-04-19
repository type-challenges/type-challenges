<!--info-header-start--><h1>Simple Vue <img src="https://img.shields.io/badge/-%E4%B8%8A%E7%B4%9A-de3d37" alt="上級"/> <img src="https://img.shields.io/badge/-%23this-999" alt="#this"/> <img src="https://img.shields.io/badge/-%23application-999" alt="#application"/> <img src="https://img.shields.io/badge/-%23vue-999" alt="#vue"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/6/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript&logoColor=white" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->

Vue ライクな型付けの簡略化されたバージョンを実装してください。

関数名 `SimpleVue` (`Vue.extend` や `defineComponent` のようなもの) を与えることで、computed や methods の中の `this` 型を適切に推論できます。

この課題では、SimpleVue が `data`、 `computed`、 `methods` フィールドを持つオブジェクトを唯一の引数として受け取れることにします。

- `data` はコンテキスト `this` を公開するオブジェクトを返す単純な関数ですが、自身や算出プロパティ、メソッドにアクセスできません。

- `computed` は、コンテキストを `this` として受け取り何らかの計算をし、その結果を返す関数のオブジェクトです。計算された結果は、関数ではなくプレーンな戻り値としてコンテキストに公開されなければなりません。

- `methods` は同様に `this` をコンテキストとする関数のオブジェクトです。メソッドは他の `methods` と同様に `data`、 `computed`、 `methods` で公開されているフィールドにアクセスできます。`computed` と異なるのは、`method` がそのまま関数として公開されている点です。

`SimpleVue` の戻り値の型は任意です。

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

<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/6/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/6/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <hr><h3>関連する課題</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00213-hard-vue-basic-props/README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-213%E3%83%BBVue%20Basic%20Props-de3d37" alt="213・Vue Basic Props"/></a> <!--info-footer-end-->

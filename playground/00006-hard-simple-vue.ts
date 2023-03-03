/*
  6 - Simple Vue
  -------
  by Anthony Fu (@antfu) #上級 #this #application #vue

  ### 質問

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

  > GitHubで確認する：https://tsch.js.org/6/ja
*/

/* _____________ ここにコードを記入 _____________ */

declare function SimpleVue(options: any): any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

SimpleVue({
  data() {
    // @ts-expect-error
    this.firstname
    // @ts-expect-error
    this.getRandom()
    // @ts-expect-error
    this.data()

    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`
    },
  },
  methods: {
    getRandom() {
      return Math.random()
    },
    hi() {
      alert(this.amount)
      alert(this.fullname.toLowerCase())
      alert(this.getRandom())
    },
    test() {
      const fullname = this.fullname
      const cases: [Expect<Equal<typeof fullname, string>>] = [] as any
    },
  },
})

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/6/answer/ja
  > 解答を見る：https://tsch.js.org/6/solutions
  > その他の課題：https://tsch.js.org/ja
*/

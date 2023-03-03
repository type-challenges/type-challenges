/*
  213 - Vue Basic Props
  -------
  by Anthony Fu (@antfu) #上級 #vue #application

  ### 質問

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

  > GitHubで確認する：https://tsch.js.org/213/ja
*/

/* _____________ ここにコードを記入 _____________ */

declare function VueBasicProps(options: any): any

/* _____________ テストケース _____________ */
import type { Debug, Equal, Expect, IsAny } from '@type-challenges/utils'

class ClassA {}

VueBasicProps({
  props: {
    propA: {},
    propB: { type: String },
    propC: { type: Boolean },
    propD: { type: ClassA },
    propE: { type: [String, Number] },
    propF: RegExp,
  },
  data(this) {
    type PropsType = Debug<typeof this>
    type cases = [
      Expect<IsAny<PropsType['propA']>>,
      Expect<Equal<PropsType['propB'], string>>,
      Expect<Equal<PropsType['propC'], boolean>>,
      Expect<Equal<PropsType['propD'], ClassA>>,
      Expect<Equal<PropsType['propE'], string | number>>,
      Expect<Equal<PropsType['propF'], RegExp>>,
    ]

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
      alert(this.fullname.toLowerCase())
      alert(this.getRandom())
    },
    test() {
      const fullname = this.fullname
      const propE = this.propE
      type cases = [
        Expect<Equal<typeof fullname, string>>,
        Expect<Equal<typeof propE, string | number>>,
      ]
    },
  },
})

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/213/answer/ja
  > 解答を見る：https://tsch.js.org/213/solutions
  > その他の課題：https://tsch.js.org/ja
*/

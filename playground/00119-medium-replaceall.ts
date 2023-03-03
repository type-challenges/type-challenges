/*
  119 - ReplaceAll
  -------
  by Anthony Fu (@antfu) #中級 #template-literal

  ### 質問

  文字列`S`に含まれる部分文字列`From`を`To`に置き換える型`ReplaceAll<S, From, To>`を実装します。

  例えば

  ```ts
  type replaced = ReplaceAll<'t y p e s', ' ', ''>; // expected to be 'types'
  ```

  > GitHubで確認する：https://tsch.js.org/119/ja
*/

/* _____________ ここにコードを記入 _____________ */

type ReplaceAll<S extends string, From extends string, To extends string> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
  Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
  Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
  Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
  Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/119/answer/ja
  > 解答を見る：https://tsch.js.org/119/solutions
  > その他の課題：https://tsch.js.org/ja
*/

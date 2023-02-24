/*
  116 - Replace
  -------
  by Anthony Fu (@antfu) #中級 #template-literal

  ### 質問

  文字列`S`に含まれる文字`From`を`To`に一度だけ置き換える型`Replace<S, From, To>`を実装します。

  例えば

  ```ts
  type replaced = Replace<'types are fun!', 'fun', 'awesome'>; // expected to be 'types are awesome!'
  ```

  > GitHubで確認する：https://tsch.js.org/116/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Replace<S extends string, From extends string, To extends string> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/116/answer/ja
  > 解答を見る：https://tsch.js.org/116/solutions
  > その他の課題：https://tsch.js.org/ja
*/

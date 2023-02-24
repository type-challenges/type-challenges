/*
  268 - If
  -------
  by Pavel Glushkov (@pashutk) #初級 #utils

  ### 質問

  条件値`C`、 `C`が truthy である場合の戻り値の型`T`、`C`が falsy である場合の戻り値の型`F`を受け取る`If`を実装します。
  条件値`C` は`true`か`false`のどちらかであることが期待されますが、`T` と `F` は任意の型をとることができます。

  例えば：

  ```ts
  type A = If<true, 'a', 'b'>; // expected to be 'a'
  type B = If<false, 'a', 'b'>; // expected to be 'b'
  ```

  > GitHubで確認する：https://tsch.js.org/268/ja
*/

/* _____________ ここにコードを記入 _____________ */

type If<C, T, F> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/268/answer/ja
  > 解答を見る：https://tsch.js.org/268/solutions
  > その他の課題：https://tsch.js.org/ja
*/

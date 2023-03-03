/*
  7561 - Subtract
  -------
  by Lo (@LoTwT) #最上級 #tuple

  ### 質問

  Implement the type Subtraction that is ` - ` in Javascript by using BuildTuple.

  If the minuend is less than the subtrahend, it should be `never`.

  It's a simple version.

  For example

  ```ts
  Subtract<2, 1> // expect to be 1
  Subtract<1, 2> // expect to be never
  ```

  > GitHubで確認する：https://tsch.js.org/7561/ja
*/

/* _____________ ここにコードを記入 _____________ */

// M => minuend, S => subtrahend
type Subtract<M extends number, S extends number> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Subtract<1, 1>, 0>>,
  Expect<Equal<Subtract<2, 1>, 1>>,
  Expect<Equal<Subtract<1, 2>, never>>,
  // @ts-expect-error
  Expect<Equal<Subtract<1000, 999>, 1>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/7561/answer/ja
  > 解答を見る：https://tsch.js.org/7561/solutions
  > その他の課題：https://tsch.js.org/ja
*/

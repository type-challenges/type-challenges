/*
  4182 - Fibonacci Sequence
  -------
  by windliang (@wind-liang) #中級

  ### 質問

  Implement a generic `Fibonacci<T>` that takes a number `T` and returns its corresponding [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).

  The sequence starts:
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

  For example
  ```ts
  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
  ```

  > GitHubで確認する：https://tsch.js.org/4182/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Fibonacci<T extends number> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/4182/answer/ja
  > 解答を見る：https://tsch.js.org/4182/solutions
  > その他の課題：https://tsch.js.org/ja
*/

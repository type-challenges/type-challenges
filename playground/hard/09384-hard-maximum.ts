/*
  9384 - Maximum
  -------
  by ch3cknull (@ch3cknull) #上級 #array

  ### 質問

  ### Description

  Implement the type `Maximum`, which takes an input type `T`, and returns the maximum value in `T`.

  If `T` is an empty array, it returns `never`. **Negative numbers** are not considered.

  For example:

  ```ts
  Maximum<[]> // never
  Maximum<[0, 2, 1]> // 2
  Maximum<[1, 20, 200, 150]> // 200
  ```

  ### Advanced

  Can you implement type `Minimum` inspired by `Maximum`?

  > GitHubで確認する：https://tsch.js.org/9384/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Maximum<T extends any[]> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Maximum<[]>, never>>,
  Expect<Equal<Maximum<[0, 2, 1]>, 2>>,
  Expect<Equal<Maximum<[1, 20, 200, 150]>, 200>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/9384/answer/ja
  > 解答を見る：https://tsch.js.org/9384/solutions
  > その他の課題：https://tsch.js.org/ja
*/

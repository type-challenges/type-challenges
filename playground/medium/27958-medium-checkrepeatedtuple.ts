/*
  27958 - CheckRepeatedTuple
  -------
  by bowen (@jiaowoxiaobala) #中級

  ### 質問

  Implement type `CheckRepeatedChars<T>` which will return whether type `T` contains duplicated member

  For example:

  ```ts
  type CheckRepeatedTuple<[1, 2, 3]>   // false
  type CheckRepeatedTuple<[1, 2, 1]>   // true
  ```

  > GitHubで確認する：https://tsch.js.org/27958/ja
*/

/* _____________ ここにコードを記入 _____________ */

type CheckRepeatedTuple<T extends unknown[]> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CheckRepeatedTuple<[number, number, string, boolean]>, true>>,
  Expect<Equal<CheckRepeatedTuple<[number, string]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[1, 2, 3]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[1, 2, 1]>, true>>,
  Expect<Equal<CheckRepeatedTuple<[]>, false>>,
  Expect<Equal<CheckRepeatedTuple<string[]>, false>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/27958/answer/ja
  > 解答を見る：https://tsch.js.org/27958/solutions
  > その他の課題：https://tsch.js.org/ja
*/

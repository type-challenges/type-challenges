/*
  8804 - Two Sum
  -------
  by PsiloLau (@Psilocine) #上級 #array #math

  ### 質問

  Given an array of integers `nums` and an integer `target`, return true if two numbers such that they add up to `target`.

  > GitHubで確認する：https://tsch.js.org/8804/ja
*/

/* _____________ ここにコードを記入 _____________ */

type TwoSum<T extends number[], U extends number> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TwoSum<[3, 3], 6>, true>>,
  Expect<Equal<TwoSum<[3, 2, 4], 6>, true>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 15>, false>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 9>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 0>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 1>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 2>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 3>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 4>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 5>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 6>, false>>,
  Expect<Equal<TwoSum<[3, 2, 0], 2>, true>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/8804/answer/ja
  > 解答を見る：https://tsch.js.org/8804/solutions
  > その他の課題：https://tsch.js.org/ja
*/

/*
  31447 - CountReversePairs
  -------
  by jiangshan (@jiangshanmeta) #最上級

  ### 質問

  Given an integer array nums, return the number of reverse pairs in the array.

  A reverse pair is a pair (i, j) where:

  * 0 <= i < j < nums.length and
  * nums[i] > nums[j].

  > GitHubで確認する：https://tsch.js.org/31447/ja
*/

/* _____________ ここにコードを記入 _____________ */

type CountReversePairs<T extends number[]> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CountReversePairs<[5, 2, 6, 1]>, 4>>,
  Expect<Equal<CountReversePairs<[1, 2, 3, 4]>, 0>>,
  Expect<Equal<CountReversePairs<[-1, -1]>, 0>>,
  Expect<Equal<CountReversePairs<[-1]>, 0>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/31447/answer/ja
  > 解答を見る：https://tsch.js.org/31447/solutions
  > その他の課題：https://tsch.js.org/ja
*/

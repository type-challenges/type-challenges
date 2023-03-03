/*
  8987 - Subsequence
  -------
  by jiangshan (@jiangshanmeta) #中級 #union

  ### 質問

  Given an array of unique elements, return all possible subsequences.

  A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.

  For example:

  ```typescript
  type A = Subsequence<[1, 2]> // [] | [1] | [2] | [1, 2]
  ```

  > GitHubで確認する：https://tsch.js.org/8987/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Subsequence<T extends any[]> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<Equal<Subsequence<[1, 2, 3]>, [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3] >>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/8987/answer/ja
  > 解答を見る：https://tsch.js.org/8987/solutions
  > その他の課題：https://tsch.js.org/ja
*/

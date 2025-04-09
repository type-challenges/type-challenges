/*
  8987 - Subsequence
  -------
  by jiangshan (@jiangshanmeta) #보통 #union

  ### 질문

  Given an array of unique elements, return all possible subsequences.

  A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.

  For example:

  ```typescript
  type A = Subsequence<[1, 2]> // [] | [1] | [2] | [1, 2]
  ```

  > GitHub에서 보기: https://tsch.js.org/8987/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Subsequence<T extends any[]> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<Equal<Subsequence<[1, 2, 3]>, [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3]>>,
  Expect<Equal<Subsequence<[1, 2, 3, 4, 5]>, [] |
  [1] | [2] | [3] | [4] | [5] |
  [1, 2] | [1, 3] | [1, 4] | [1, 5] | [2, 3] | [2, 4] | [2, 5] | [3, 4] | [3, 5] | [4, 5] |
  [1, 2, 3] | [1, 2, 4] | [1, 2, 5] | [1, 3, 4] | [1, 3, 5] | [1, 4, 5] | [2, 3, 4] | [2, 3, 5] | [2, 4, 5] | [3, 4, 5] |
  [1, 2, 3, 4] | [1, 2, 3, 5] | [1, 2, 4, 5] | [1, 3, 4, 5] | [2, 3, 4, 5] |
  [1, 2, 3, 4, 5] >>,
  Expect<Equal<Subsequence<['a', 'b', 'c']>, [] |
  ['a'] | ['b'] | ['c'] |
  ['a', 'b'] | ['a', 'c'] | ['b', 'c'] |
  ['a', 'b', 'c'] >>,
  Expect<Equal<Subsequence<['x', 'y']>, [] |
  ['x'] | ['y'] |
  ['x', 'y'] >>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/8987/answer/ko
  > 정답 보기: https://tsch.js.org/8987/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

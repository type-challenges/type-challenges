/*
  31447 - CountReversePairs
  -------
  by jiangshan (@jiangshanmeta) #매우 어려움

  ### 질문

  Given an integer array nums, return the number of reverse pairs in the array.

  A reverse pair is a pair (i, j) where:

  * 0 <= i < j < nums.length and
  * nums[i] > nums[j].

  > GitHub에서 보기: https://tsch.js.org/31447/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type CountReversePairs<T extends number[]> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CountReversePairs<[5, 2, 6, 1]>, 4>>,
  Expect<Equal<CountReversePairs<[1, 2, 3, 4]>, 0>>,
  Expect<Equal<CountReversePairs<[-1, -1]>, 0>>,
  Expect<Equal<CountReversePairs<[-1]>, 0>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/31447/answer/ko
  > 정답 보기: https://tsch.js.org/31447/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

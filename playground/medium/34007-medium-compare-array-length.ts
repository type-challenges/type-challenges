/*
  34007 - Compare Array Length
  -------
  by alviner (@ScriptBloom) #보통 #recursion #array

  ### 질문

  Implement `CompareArrayLength` to compare two array length(T & U).

  If length of T array is greater than U, return 1;
  If length of U array is greater than T, return -1;
  If length of T array is equal to U, return 0.

  > GitHub에서 보기: https://tsch.js.org/34007/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type CompareArrayLength<T extends any[], U extends any[]> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CompareArrayLength<[1, 2, 3, 4], [5, 6]>, 1>>,
  Expect<Equal<CompareArrayLength<[1, 2], [3, 4, 5, 6]>, -1>>,
  Expect<Equal<CompareArrayLength<[], []>, 0>>,
  Expect<Equal<CompareArrayLength<[1, 2, 3], [4, 5, 6]>, 0>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/34007/answer/ko
  > 정답 보기: https://tsch.js.org/34007/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

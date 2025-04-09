/*
  34286 - Take Elements
  -------
  by Eirik Måseidvåg (@Eirmas) #어려움 #array

  ### 질문

  Implement a type `Take<N, Arr>` that returns the first `N` elements from an array `Arr`. If `N` is negative, return the last `|N|` elements

  For example,
  ```ts
  type T0 = Take<2, [1, 2, 3]> // [1, 2]
  type T1 = Take<3, ['1', 2, true, false]> // ['1', 2, true]
  type T2 = Take<-2, [1, 2, 3]> // [2, 3]
  type T3 = Take<0, [1, 2, 3]> // []
  type T4 = Take<5, [1, 2, 3]> // [1, 2, 3]
  type T5 = Take<3, []> // []
  ```

  > GitHub에서 보기: https://tsch.js.org/34286/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Take<N, Arr> = Arr

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Take<2, [1, 2, 3]>, [1, 2]>>,
  Expect<Equal<Take<3, ['1', 2, true, false]>, ['1', 2, true]>>,
  Expect<Equal<Take<-2, [1, 2, 3]>, [2, 3]>>,
  Expect<Equal<Take<0, [1, 2, 3]>, []>>,
  Expect<Equal<Take<5, [1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<Take<3, []>, []>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/34286/answer/ko
  > 정답 보기: https://tsch.js.org/34286/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

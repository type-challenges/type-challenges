/*
  9384 - Maximum
  -------
  by ch3cknull (@ch3cknull) #어려움 #array

  ### 질문

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

  > GitHub에서 보기: https://tsch.js.org/9384/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Maximum<T extends any[]> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Maximum<[]>, never>>,
  Expect<Equal<Maximum<[0, 2, 1]>, 2>>,
  Expect<Equal<Maximum<[1, 20, 200, 150]>, 200>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/9384/answer/ko
  > 정답 보기: https://tsch.js.org/9384/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

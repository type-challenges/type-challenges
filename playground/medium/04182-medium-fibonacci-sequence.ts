/*
  4182 - Fibonacci Sequence
  -------
  by windliang (@wind-liang) #보통

  ### 질문

  Implement a generic `Fibonacci<T>` that takes a number `T` and returns its corresponding [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).

  The sequence starts:
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

  For example
  ```ts
  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
  ```

  > GitHub에서 보기: https://tsch.js.org/4182/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Fibonacci<T extends number> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/4182/answer/ko
  > 정답 보기: https://tsch.js.org/4182/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

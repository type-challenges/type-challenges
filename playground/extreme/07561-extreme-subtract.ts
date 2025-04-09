/*
  7561 - Subtract
  -------
  by Lo (@LoTwT) #매우 어려움 #tuple

  ### 질문

  Implement the type Subtraction that is ` - ` in Javascript by using BuildTuple.

  If the minuend is less than the subtrahend, it should be `never`.

  It's a simple version.

  For example

  ```ts
  Subtract<2, 1> // expect to be 1
  Subtract<1, 2> // expect to be never
  ```

  > GitHub에서 보기: https://tsch.js.org/7561/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

// M => minuend, S => subtrahend
type Subtract<M extends number, S extends number> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Subtract<1, 1>, 0>>,
  Expect<Equal<Subtract<2, 1>, 1>>,
  Expect<Equal<Subtract<1, 2>, never>>,
  // @ts-expect-error
  Expect<Equal<Subtract<1000, 999>, 1>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/7561/answer/ko
  > 정답 보기: https://tsch.js.org/7561/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

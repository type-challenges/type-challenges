/*
  5140 - Trunc
  -------
  by jiangshan (@jiangshanmeta) #보통 #template-literal

  ### 질문

  Implement the type version of ```Math.trunc```, which takes string or number and returns the integer part of a number by removing any fractional digits.

  For example:

  ```typescript
  type A = Trunc<12.34> // 12
  ```

  > GitHub에서 보기: https://tsch.js.org/5140/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Trunc = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trunc<0.1>, '0'>>,
  Expect<Equal<Trunc<0.2>, '0'>>,
  Expect<Equal<Trunc<1.234>, '1'>>,
  Expect<Equal<Trunc<12.345>, '12'>>,
  Expect<Equal<Trunc<-5.1>, '-5'>>,
  Expect<Equal<Trunc<'.3'>, '0'>>,
  Expect<Equal<Trunc<'1.234'>, '1'>>,
  Expect<Equal<Trunc<'-.3'>, '-0'>>,
  Expect<Equal<Trunc<'-10.234'>, '-10'>>,
  Expect<Equal<Trunc<10>, '10'>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/5140/answer/ko
  > 정답 보기: https://tsch.js.org/5140/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

/*
  300 - String to Number
  -------
  by Pig Fang (@g-plane) #어려움 #template-literal

  ### 질문

  Convert a string literal to a number, which behaves like `Number.parseInt`.

  > GitHub에서 보기: https://tsch.js.org/300/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type ToNumber<S extends string> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ToNumber<'0'>, 0>>,
  Expect<Equal<ToNumber<'5'>, 5>>,
  Expect<Equal<ToNumber<'12'>, 12>>,
  Expect<Equal<ToNumber<'27'>, 27>>,
  Expect<Equal<ToNumber<'18@7_$%'>, never>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/300/answer/ko
  > 정답 보기: https://tsch.js.org/300/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

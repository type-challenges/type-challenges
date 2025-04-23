/*
  27133 - Square
  -------
  by null (@aswinsvijay) #보통 #tuple #array #math

  ### 질문

  Given a number, your type should return its square.

  > GitHub에서 보기: https://tsch.js.org/27133/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Square<N extends number> = number

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Square<0>, 0>>,
  Expect<Equal<Square<1>, 1>>,
  Expect<Equal<Square<3>, 9>>,
  Expect<Equal<Square<20>, 400>>,
  Expect<Equal<Square<100>, 10000>>,
  Expect<Equal<Square<101>, 10201>>,

  // Negative numbers
  Expect<Equal<Square<-2>, 4>>,
  Expect<Equal<Square<-5>, 25>>,
  Expect<Equal<Square<-31>, 961>>,
  Expect<Equal<Square<-50>, 2500>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/27133/answer/ko
  > 정답 보기: https://tsch.js.org/27133/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

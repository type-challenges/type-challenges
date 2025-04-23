/*
  27152 - Triangular number
  -------
  by null (@aswinsvijay) #보통 #tuple #array #math

  ### 질문

  Given a number N, find the Nth triangular number, i.e. `1 + 2 + 3 + ... + N`

  > GitHub에서 보기: https://tsch.js.org/27152/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Triangular<N extends number> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Triangular<0>, 0>>,
  Expect<Equal<Triangular<1>, 1>>,
  Expect<Equal<Triangular<3>, 6>>,
  Expect<Equal<Triangular<10>, 55>>,
  Expect<Equal<Triangular<20>, 210>>,
  Expect<Equal<Triangular<55>, 1540>>,
  Expect<Equal<Triangular<100>, 5050>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/27152/answer/ko
  > 정답 보기: https://tsch.js.org/27152/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

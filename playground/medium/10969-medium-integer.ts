/*
  10969 - Integer
  -------
  by HuaBing (@hbcraft) #보통 #template-literal

  ### 질문

  Please complete type `Integer<T>`, type `T` inherits from `number`, if `T` is an integer return it, otherwise return `never`.

  > GitHub에서 보기: https://tsch.js.org/10969/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Integer<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

let x = 1
let y = 1 as const

type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<Integer<1.1>, never>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<1.000000000>, 1>>,
  Expect<Equal<Integer<0.5>, never>>,
  Expect<Equal<Integer<28.00>, 28>>,
  Expect<Equal<Integer<28.101>, never>>,
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/10969/answer/ko
  > 정답 보기: https://tsch.js.org/10969/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

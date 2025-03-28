/*
  90 - Optional Keys
  -------
  by yituan (@yi-tuan) #어려움 #utils

  ### 질문

  Implement the advanced util type `OptionalKeys<T>`, which picks all the optional keys into a union.

  > GitHub에서 보기: https://tsch.js.org/90/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type OptionalKeys<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<OptionalKeys<{ a: number, b?: string }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined, b?: undefined }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined, b?: undefined, c?: string, d?: null }>, 'b' | 'c' | 'd'>>,
  Expect<Equal<OptionalKeys<{}>, never>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/90/answer/ko
  > 정답 보기: https://tsch.js.org/90/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

/*
  59 - Get Optional
  -------
  by Zheeeng (@zheeeng) #어려움 #utils #infer

  ### 질문

  Implement the advanced util type `GetOptional<T>`, which remains all the optional fields

  For example

  ```ts
  type I = GetOptional<{ foo: number, bar?: string }> // expected to be { bar?: string }
  ```

  > GitHub에서 보기: https://tsch.js.org/59/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type GetOptional<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GetOptional<{ foo: number, bar?: string }>, { bar?: string }>>,
  Expect<Equal<GetOptional<{ foo: undefined, bar?: undefined }>, { bar?: undefined }>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/59/answer/ko
  > 정답 보기: https://tsch.js.org/59/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

/*
  57 - Get Required
  -------
  by Zheeeng (@zheeeng) #어려움 #utils #infer

  ### 질문

  Implement the advanced util type `GetRequired<T>`, which remains all the required fields

  For example

  ```ts
  type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }
  ```

  > GitHub에서 보기: https://tsch.js.org/57/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type GetRequired<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GetRequired<{ foo: number, bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined, bar?: undefined }>, { foo: undefined }>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/57/answer/ko
  > 정답 보기: https://tsch.js.org/57/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

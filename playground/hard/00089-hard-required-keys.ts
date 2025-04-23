/*
  89 - Required Keys
  -------
  by yituan (@yi-tuan) #어려움 #utils

  ### 질문

  Implement the advanced util type `RequiredKeys<T>`, which picks all the required keys into a union.

  For example

  ```ts
  type Result = RequiredKeys<{ foo: number; bar?: string }>;
  // expected to be “foo”
  ```

  > GitHub에서 보기: https://tsch.js.org/89/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type RequiredKeys<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<RequiredKeys<{ a: number, b?: string }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined, b?: undefined }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined, b?: undefined, c: string, d: null }>, 'a' | 'c' | 'd'>>,
  Expect<Equal<RequiredKeys<{}>, never>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/89/answer/ko
  > 정답 보기: https://tsch.js.org/89/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

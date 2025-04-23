/*
  5181 - Mutable Keys
  -------
  by Yugang Cao (@Talljack) #어려움 #utils

  ### 질문

  Implement the advanced util type MutableKeys<T>, which picks all the mutable (not readonly) keys into a union.

  For example:

  ```ts
  type Keys = MutableKeys<{ readonly foo: string; bar: number }>;
  // expected to be “bar”
  ```

  > GitHub에서 보기: https://tsch.js.org/5181/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type MutableKeys<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MutableKeys<{ a: number, readonly b: string }>, 'a'>>,
  Expect<Equal<MutableKeys<{ a: undefined, readonly b: undefined }>, 'a'>>,
  Expect<Equal<MutableKeys<{ a: undefined, readonly b?: undefined, c: string, d: null }>, 'a' | 'c' | 'd'>>,
  Expect<Equal<MutableKeys<{}>, never>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/5181/answer/ko
  > 정답 보기: https://tsch.js.org/5181/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

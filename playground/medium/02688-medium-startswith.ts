/*
  2688 - StartsWith
  -------
  by jiangshan (@jiangshanmeta) #보통 #template-literal

  ### 질문

  Implement `StartsWith<T, U>` which takes two exact string types and returns whether `T` starts with `U`

  For example

  ```typescript
  type a = StartsWith<'abc', 'ac'> // expected to be false
  type b = StartsWith<'abc', 'ab'> // expected to be true
  type c = StartsWith<'abc', 'abcd'> // expected to be false
  ```

  > GitHub에서 보기: https://tsch.js.org/2688/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type StartsWith<T extends string, U extends string> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abc'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
  Expect<Equal<StartsWith<'abc', ''>, true>>,
  Expect<Equal<StartsWith<'abc', ' '>, false>>,
  Expect<Equal<StartsWith<'', ''>, true>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/2688/answer/ko
  > 정답 보기: https://tsch.js.org/2688/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

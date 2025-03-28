/*
  2693 - EndsWith
  -------
  by jiangshan (@jiangshanmeta) #보통 #template-literal

  ### 질문

  Implement `EndsWith<T, U>` which takes two exact string types and returns whether `T` ends with `U`

  For example:

  ```typescript
  type a = EndsWith<'abc', 'bc'> // expected to be true
  type b = EndsWith<'abc', 'abc'> // expected to be true
  type c = EndsWith<'abc', 'd'> // expected to be false
  ```

  > GitHub에서 보기: https://tsch.js.org/2693/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type EndsWith<T extends string, U extends string> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'd'>, false>>,
  Expect<Equal<EndsWith<'abc', 'ac'>, false>>,
  Expect<Equal<EndsWith<'abc', ''>, true>>,
  Expect<Equal<EndsWith<'abc', ' '>, false>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/2693/answer/ko
  > 정답 보기: https://tsch.js.org/2693/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

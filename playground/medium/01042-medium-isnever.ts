/*
  1042 - IsNever
  -------
  by hiroya iizuka (@hiroyaiizuka) #보통 #union #utils

  ### 질문

  input type으로 `T`를 받는 IsNever type을 구현하세요. 만약 `T`의 유형이 `never`으로 확인되면 `true`를 반환하고 아니면 `false`를 반환합니다

  예시:

  ```ts
  type A = IsNever<never> // expected to be true
  type B = IsNever<undefined> // expected to be false
  type C = IsNever<null> // expected to be false
  type D = IsNever<[]> // expected to be false
  type E = IsNever<number> // expected to be false
  ```

  > GitHub에서 보기: https://tsch.js.org/1042/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type IsNever<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/1042/answer/ko
  > 정답 보기: https://tsch.js.org/1042/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

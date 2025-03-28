/*
  9616 - Parse URL Params
  -------
  by Anderson. J (@andersonjoseph) #보통 #infer #string #template-literal

  ### 질문

  You're required to implement a type-level parser to parse URL params string into an Union.

  ```ts
  ParseUrlParams<':id'> // id
  ParseUrlParams<'posts/:id'> // id
  ParseUrlParams<'posts/:id/:user'> // id | user
  ```

  > GitHub에서 보기: https://tsch.js.org/9616/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type ParseUrlParams<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ParseUrlParams<''>, never>>,
  Expect<Equal<ParseUrlParams<':id'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/:user'>, 'id' | 'user'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/:user/like'>, 'id' | 'user'>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/9616/answer/ko
  > 정답 보기: https://tsch.js.org/9616/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

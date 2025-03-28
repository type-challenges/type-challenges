/*
  3192 - Reverse
  -------
  by jiangshan (@jiangshanmeta) #보통 #tuple

  ### 질문

  Implement the type version of ```Array.reverse```

  For example:

  ```typescript
  type a = Reverse<['a', 'b']> // ['b', 'a']
  type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
  ```

  > GitHub에서 보기: https://tsch.js.org/3192/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Reverse<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
]

type errors = [
  // @ts-expect-error
  Reverse<'string'>,
  // @ts-expect-error
  Reverse<{ key: 'value' }>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/3192/answer/ko
  > 정답 보기: https://tsch.js.org/3192/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

/*
  3062 - Shift
  -------
  by jiangshan (@jiangshanmeta) #보통 #array

  ### 질문

  Implement the type version of ```Array.shift```

  For example

  ```typescript
  type Result = Shift<[3, 2, 1]> // [2, 1]
  ```

  > GitHub에서 보기: https://tsch.js.org/3062/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Shift<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // @ts-expect-error
  Shift<unknown>,
  Expect<Equal<Shift<[]>, []>>,
  Expect<Equal<Shift<[1]>, []>>,
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/3062/answer/ko
  > 정답 보기: https://tsch.js.org/3062/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

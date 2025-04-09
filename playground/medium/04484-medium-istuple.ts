/*
  4484 - IsTuple
  -------
  by jiangshan (@jiangshanmeta) #보통 #tuple

  ### 질문

  Implement a type ```IsTuple```, which takes an input type ```T``` and returns whether ```T``` is tuple type.

  For example:

  ```typescript
  type case1 = IsTuple<[number]> // true
  type case2 = IsTuple<readonly [number]> // true
  type case3 = IsTuple<number[]> // false
  ```

  > GitHub에서 보기: https://tsch.js.org/4484/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type IsTuple<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/4484/answer/ko
  > 정답 보기: https://tsch.js.org/4484/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

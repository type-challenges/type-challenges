/*
  27862 - CartesianProduct
  -------
  by jazelly (@jazelly) #보통 #union

  ### 질문

  Given 2 sets (unions), return its Cartesian product in a set of tuples, e.g.
  ```ts
  CartesianProduct<1 | 2, 'a' | 'b'>
  // [1, 'a'] | [2, 'a'] | [1, 'b'] | [2, 'b']
  ```

  > GitHub에서 보기: https://tsch.js.org/27862/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type CartesianProduct<T, U> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CartesianProduct<1 | 2, 'a' | 'b'>, [2, 'a'] | [1, 'a'] | [2, 'b'] | [1, 'b']>>,
  Expect<Equal<CartesianProduct<1 | 2 | 3, 'a' | 'b' | 'c' >, [2, 'a'] | [1, 'a'] | [3, 'a'] | [2, 'b'] | [1, 'b'] | [3, 'b'] | [2, 'c'] | [1, 'c'] | [3, 'c']>>,
  Expect<Equal<CartesianProduct<1 | 2, 'a' | never>, [2, 'a'] | [1, 'a'] >>,
  Expect<Equal<CartesianProduct<'a', Function | string>, ['a', Function] | ['a', string]>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/27862/answer/ko
  > 정답 보기: https://tsch.js.org/27862/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

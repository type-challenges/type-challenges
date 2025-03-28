/*
  5423 - Intersection
  -------
  by Pineapple (@Pineapple0919) #어려움 #union #array

  ### 질문

  Implement the type version of Lodash.intersection with a little difference. Intersection<T> takes an Array T containing several arrays or any type element including the union type, and returns a new union containing all intersection elements.

  ```ts
  type Res = Intersection<[[1, 2], [2, 3], [2, 2]]>; // expected to be 2
  type Res1 = Intersection<[[1, 2, 3], [2, 3, 4], [2, 2, 3]]>; // expected to be 2 | 3
  type Res2 = Intersection<[[1, 2], [3, 4], [5, 6]]>; // expected to be never
  type Res3 = Intersection<[[1, 2, 3], [2, 3, 4], 3]>; // expected to be 3
  type Res4 = Intersection<[[1, 2, 3], 2 | 3 | 4, 2 | 3]>; // expected to be 2 | 3
  type Res5 = Intersection<[[1, 2, 3], 2, 3]>; // expected to be never
  ```

  > GitHub에서 보기: https://tsch.js.org/5423/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Intersection<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Intersection<[[1, 2], [2, 3], [2, 2]]>, 2>>,
  Expect<Equal<Intersection<[[1, 2, 3], [2, 3, 4], [2, 2, 3]]>, 2 | 3>>,
  Expect<Equal<Intersection<[[1, 2], [3, 4], [5, 6]]>, never>>,
  Expect<Equal<Intersection<[[1, 2, 3], [2, 3, 4], 3]>, 3>>,
  Expect<Equal<Intersection<[[1, 2, 3], 2 | 3 | 4, 2 | 3]>, 2 | 3>>,
  Expect<Equal<Intersection<[[1, 2, 3], 2, 3]>, never>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/5423/answer/ko
  > 정답 보기: https://tsch.js.org/5423/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

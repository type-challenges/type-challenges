/*
  5117 - Without
  -------
  by Pineapple (@Pineapple0919) #보통 #union #array

  ### 질문

  Implement the type version of Lodash.without, Without<T, U> takes an Array T, number or array U and returns an Array without the elements of U.

  ```ts
  type Res = Without<[1, 2], 1>; // expected to be [2]
  type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
  type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []
  ```

  > GitHub에서 보기: https://tsch.js.org/5117/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Without<T, U> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/5117/answer/ko
  > 정답 보기: https://tsch.js.org/5117/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

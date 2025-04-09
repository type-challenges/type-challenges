/*
  35191 - Trace
  -------
  by csharpython (@csharpython) #보통

  ### 질문

  The trace of a square matrix is the sum of the elements on its main diagonal.
  However, it's difficult to calculate the sum with type system.
  To make things simple, let's return the elements on the main diagonal with union type.


  For example:

  ```ts
  type Arr = [
    [1,2],
    [3,4]
  ]
  type Test = Trace<Arr> // expected to be 1 | 4
  ```

  > GitHub에서 보기: https://tsch.js.org/35191/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Trace<T extends any[][]> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trace<[[1, 2], [3, 4]]>, 1 | 4>>,
  Expect<Equal<Trace<[[0, 1, 1], [2, 0, 2], [3, 3, 0]]>, 0>>,
  Expect<Equal<Trace<[['a', 'b', ''], ['c', '', ''], ['d', 'e', 'f']]>, 'a' | '' | 'f'>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/35191/answer/ko
  > 정답 보기: https://tsch.js.org/35191/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

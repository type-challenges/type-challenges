/*
  15 - Last of Array
  -------
  by Anthony Fu (@antfu) #보통 #array

  ### 질문

  > 이 챌린지에는 TypeScript 4.0 사용이 권장됩니다.

  배열 `T`를 사용하고 마지막 요소를 반환하는 제네릭 `Last<T>`를 구현합니다.

  예시

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type tail1 = Last<arr1> // expected to be 'c'
  type tail2 = Last<arr2> // expected to be 1
  ```

  > GitHub에서 보기: https://tsch.js.org/15/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Last<T extends any[]> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[]>, never>>,
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/15/answer/ko
  > 정답 보기: https://tsch.js.org/15/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

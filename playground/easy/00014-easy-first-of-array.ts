/*
  14 - First of Array
  -------
  by Anthony Fu (@antfu) #쉬움 #array

  ### 질문

  배열(튜플) `T`를 받아 첫 원소의 타입을 반환하는 제네릭 `First<T>`를 구현하세요.

  예시:

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3
  ```

  > GitHub에서 보기: https://tsch.js.org/14/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type First<T extends any[]> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/14/answer/ko
  > 정답 보기: https://tsch.js.org/14/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

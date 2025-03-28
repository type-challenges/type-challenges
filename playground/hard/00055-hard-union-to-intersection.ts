/*
  55 - Union to Intersection
  -------
  by Zheeeng (@zheeeng) #어려움 #utils #infer

  ### 질문

  Implement the advanced util type `UnionToIntersection<U>`

  For example

  ```ts
  type I = UnionToIntersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true
  ```

  > GitHub에서 보기: https://tsch.js.org/55/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type UnionToIntersection<U> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/55/answer/ko
  > 정답 보기: https://tsch.js.org/55/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

/*
  399 - Tuple Filter
  -------
  by Ryo Hanafusa (@softoika) #어려움 #tuple #infer

  ### 질문

  Implement a type `FilterOut<T, F>` that filters out items of the given type `F` from the tuple `T`.

  For example,
  ```ts
  type Filtered = FilterOut<[1, 2, null, 3], null> // [1, 2, 3]
  ```

  > GitHub에서 보기: https://tsch.js.org/399/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type FilterOut<T extends any[], F> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FilterOut<[], never>, []>>,
  Expect<Equal<FilterOut<[never], never>, []>>,
  Expect<Equal<FilterOut<['a', never], never>, ['a']>>,
  Expect<Equal<FilterOut<[1, never, 'a'], never>, [1, 'a']>>,
  Expect<Equal<FilterOut<[never, 1, 'a', undefined, false, null], never | null | undefined>, [1, 'a', false]>>,
  Expect<Equal<FilterOut<[number | null | undefined, never], never | null | undefined>, [number | null | undefined]>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/399/answer/ko
  > 정답 보기: https://tsch.js.org/399/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

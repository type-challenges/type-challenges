/*
  18220 - Filter
  -------
  by Muhun Kim (@x86chi) #보통 #array #filter

  ### 질문

  원시 타입 또는 유니온 원시 타입인 `Predicate`과 `Predicate`의 요소로 포함되는 배열을 반환하고, 배열 `T`를 가지는 `Filter<T, Predicate>` 타입을 구현하세요.

  > GitHub에서 보기: https://tsch.js.org/18220/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Filter<T extends any[], P> = []

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Falsy = false | 0 | '' | null | undefined

type cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/18220/answer/ko
  > 정답 보기: https://tsch.js.org/18220/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

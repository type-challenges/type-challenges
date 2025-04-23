/*
  13580 - Replace Union
  -------
  by Konstantin Barabanov (@crutch12) #어려움

  ### 질문

  Given an `union of types` and `array of type pairs` to replace (`[[string, number], [Date, null]]`), return a new union replaced with the `type pairs`.

  > GitHub에서 보기: https://tsch.js.org/13580/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type UnionReplace<T, U extends [any, any][]> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // string -> null
  Expect<Equal<UnionReplace<number | string, [[string, null]]>, number | null>>,

  // string -> null
  Expect<Equal<UnionReplace<number | string, [[string, null], [Date, Function]]>, number | null>>,

  // Date -> string; Function -> undefined
  Expect<Equal<UnionReplace<Function | Date | object, [[Date, string], [Function, undefined]]>, undefined | string | object>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/13580/answer/ko
  > 정답 보기: https://tsch.js.org/13580/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

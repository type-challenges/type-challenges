/*
  223 - IsAny
  -------
  by Pavel Glushkov (@pashutk) #어려움 #utils

  ### 질문

  Sometimes it's useful to detect if you have a value with `any` type. This is especially helpful while working with third-party Typescript modules, which can export `any` values in the module API. It's also good to know about `any` when you're suppressing implicitAny checks.

  So, let's write a utility type `IsAny<T>`, which takes input type `T`. If `T` is `any`, return `true`, otherwise, return `false`.

  > GitHub에서 보기: https://tsch.js.org/223/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type IsAny<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsAny<any>, true>>,

  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/223/answer/ko
  > 정답 보기: https://tsch.js.org/223/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

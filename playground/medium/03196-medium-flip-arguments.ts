/*
  3196 - Flip Arguments
  -------
  by jiangshan (@jiangshanmeta) #보통 #arguments

  ### 질문

  Implement the type version of lodash's ```_.flip```.

  Type ```FlipArguments<T>``` requires function type ```T``` and returns a new function type which has the same return type of T but reversed parameters.

  For example:

  ```typescript
  type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>
  // (arg0: boolean, arg1: number, arg2: string) => void
  ```

  > GitHub에서 보기: https://tsch.js.org/3196/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type FlipArguments<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>>,
  Expect<Equal<FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>, (arg0: boolean, arg1: number, arg2: string) => void>>,
]

type errors = [
  // @ts-expect-error
  FlipArguments<'string'>,
  // @ts-expect-error
  FlipArguments<{ key: 'value' }>,
  // @ts-expect-error
  FlipArguments<['apple', 'banana', 100, { a: 1 }]>,
  // @ts-expect-error
  FlipArguments<null | undefined>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/3196/answer/ko
  > 정답 보기: https://tsch.js.org/3196/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

/*
  2070 - Drop Char
  -------
  by CaptainOfPhB (@CaptainOfPhB) #보통 #template-literal #infer

  ### 질문

  Drop a specified char from a string.

  For example:

  ```ts
  type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
  ```

  > GitHub에서 보기: https://tsch.js.org/2070/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type DropChar<S, C> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // @ts-expect-error
  Expect<Equal<DropChar<'butter fly!', ''>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', '!'>, 'butter fly'>>,
  Expect<Equal<DropChar<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/2070/answer/ko
  > 정답 보기: https://tsch.js.org/2070/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

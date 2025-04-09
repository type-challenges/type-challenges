/*
  30575 - BitwiseXOR
  -------
  by jiangshan (@jiangshanmeta) #어려움

  ### 질문

  Implement ```BitwiseXOR<S1,S2>``` which takes two binary string literal type and returns a binary string that reprents the bitwise XOR of S1 and S2

  For example:

  ```typescript
  BitwiseXOR<'0','1'> // expect '1'
  BitwiseXOR<'1','1'> // expect '0'
  BitwiseXOR<'10','1'>  // expect '11'
  ```

  > GitHub에서 보기: https://tsch.js.org/30575/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type BitwiseXOR<S1 extends string, S2 extends string> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BitwiseXOR<'0', '1'>, '1'>>,
  Expect<Equal<BitwiseXOR<'1', '1'>, '0'>>,
  Expect<Equal<BitwiseXOR<'10', '1'>, '11'>>,
  Expect<Equal<BitwiseXOR<'110', '1'>, '111'>>,
  Expect<Equal<BitwiseXOR<'101', '11'>, '110'>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/30575/answer/ko
  > 정답 보기: https://tsch.js.org/30575/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

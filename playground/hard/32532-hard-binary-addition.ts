/*
  32532 - Binary Addition
  -------
  by Finley Garton (@finleygn) #어려움 #recursion #array

  ### 질문

  Implement `BinaryAdd` to add two binary numbers together. The numbers should not be translated out of binary at any point.

  Note the two inputs will always have the same length.

  > GitHub에서 보기: https://tsch.js.org/32532/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Bit = 1 | 0

type BinaryAdd<A extends Bit[], B extends Bit[]> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<
    BinaryAdd<[1], [1]>,
    [1, 0]
  >>,
  Expect<Equal<
    BinaryAdd<[0], [1]>,
    [1]
  >>,
  Expect<Equal<
    BinaryAdd<[1, 1, 0], [0, 0, 1]>,
    [1, 1, 1]
  >>,
  Expect<Equal<
    BinaryAdd<[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]>,
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
  >>,
  Expect<Equal<
    BinaryAdd<[1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 1, 1, 0, 0]>,
    [1, 0, 0, 1, 1, 1, 0, 1, 0]
  >>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/32532/answer/ko
  > 정답 보기: https://tsch.js.org/32532/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

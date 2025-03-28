/*
  30430 - Tower of hanoi
  -------
  by null (@aswinsvijay) #보통 #array

  ### 질문

  Simulate the solution for the Tower of Hanoi puzzle. Your type should take the number of rings as input an return an array of steps to move the rings from tower A to tower B using tower C as additional. Each entry in the array should be a pair of strings `[From, To]` which denotes ring being moved `From -> To`.

  [Wikipedia](https://en.wikipedia.org/wiki/Tower_of_Hanoi)
  [GeeksForGeeks](https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi)

  > GitHub에서 보기: https://tsch.js.org/30430/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Hanoi<N extends number, From = 'A', To = 'B', Intermediate = 'C'> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Tests = [
  Expect<Equal<Hanoi<0>, []>>,
  Expect<Equal<Hanoi<1>, [['A', 'B']]>>,
  Expect<Equal<Hanoi<2>, [['A', 'C'], ['A', 'B'], ['C', 'B']]>>,
  Expect<Equal<Hanoi<3>, [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B']]>>,
  Expect<Equal<Hanoi<5>, [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['B', 'A'], ['C', 'A'], ['B', 'C'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['C', 'A'], ['B', 'C'], ['B', 'A'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B']]>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/30430/answer/ko
  > 정답 보기: https://tsch.js.org/30430/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

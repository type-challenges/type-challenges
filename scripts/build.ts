/*
  16 - Pop
  -------
  by Anthony Fu (@antfu) #medium #array #4.0

  ### Question

  > TypeScript 4.0 is recommended in this challenge

  Implement a generic `Pop<T>` that takes an Array `T` and returns an Array without it's last element.

  For example

  ```ts
  type arr1 = ['a', 'b', 'c', 'd']
  type arr2 = [3, 2, 1]

  type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
  type re2 = Pop<arr2> // expected to be [3, 2]
  ```

  **Extra**: Similarly, can you implement `Shift`, `Push` and `Unshift` as well?

  > View on Github: https://type-challenges.netlify.app/16
*/

/* _____________ Your Code Here _____________ */

type Pop<T extends any[]> = T extends [... infer T, infer K] ? T : never

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type a = Pop<[3, 2, 1]>

type cases = [
  Expect<Equal<a, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd', ]>, ['a', 'b', 'c']>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://type-challenges.netlify.app/16/answer
  > View solutions: https://type-challenges.netlify.app/16/solutions
  > More Challenges: https://type-challenges.netlify.app
*/

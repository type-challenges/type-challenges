/*
  35191 - Trace
  -------
  by csharpython (@csharpython) #medium

  ### Question

  The trace of a square matrix is the sum of the elements on its main diagonal.
  However, it's difficult to calculate the sum with type system.
  To make things simple, let's return the elements on the main diagonal with union type.


  For example:

  ```ts
  type Arr = [
    [1,2],
    [3,4]
  ]
  type Test = Trace<Arr> // expected to be 1 | 4
  ```

  > View on GitHub: https://tsch.js.org/35191
*/

/* _____________ Your Code Here _____________ */

type Trace<T extends any[][]> = any

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trace<[[1, 2], [3, 4]]>, 1 | 4>>,
  Expect<Equal<Trace<[[0, 1, 1], [2, 0, 2], [3, 3, 0]]>, 0>>,
  Expect<Equal<Trace<[['a', 'b', ''], ['c', '', ''], ['d', 'e', 'f']]>, 'a' | '' | 'f'>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/35191/answer
  > View solutions: https://tsch.js.org/35191/solutions
  > More Challenges: https://tsch.js.org
*/

/*
  18142 - All
  -------
  by cutefcc (@cutefcc) #medium #array

  ### Question

  Returns true if all elements of the list are equal to the second parameter passed in, false if there are any mismatches.

  For example

  ```ts
  type Test1 = [1, 1, 1]
  type Test2 = [1, 1, 2]

  type Todo = All<Test1, 1> // should be same as true
  type Todo2 = All<Test2, 1> // should be same as false
  ```

  > View on GitHub: https://tsch.js.org/18142
*/

/* _____________ Your Code Here _____________ */

type All = any

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<All<[1, 1, 1], 1>, true>>,
  Expect<Equal<All<[1, 1, 2], 1>, false>>,
  Expect<Equal<All<['1', '1', '1'], '1'>, true>>,
  Expect<Equal<All<['1', '1', '1'], 1>, false>>,
  Expect<Equal<All<[number, number, number], number>, true>>,
  Expect<Equal<All<[number, number, string], number>, false>>,
  Expect<Equal<All<[null, null, null], null>, true>>,
  Expect<Equal<All<[[1], [1], [1]], [1]>, true>>,
  Expect<Equal<All<[{}, {}, {}], {}>, true>>,
  Expect<Equal<All<[never], never>, true>>,
  Expect<Equal<All<[any], any>, true>>,
  Expect<Equal<All<[unknown], unknown>, true>>,
  Expect<Equal<All<[any], unknown>, false>>,
  Expect<Equal<All<[unknown], any>, false>>,
  Expect<Equal<All<[1, 1, 2], 1 | 2>, false>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/18142/answer
  > View solutions: https://tsch.js.org/18142/solutions
  > More Challenges: https://tsch.js.org
*/

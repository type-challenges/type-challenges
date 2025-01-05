/*
  34007 - Compare Array Length
  -------
  by alviner (@ScriptBloom) #medium #recursion #array

  ### Question

  Implement `CompareArrayLength` to compare two array length(T & U).

  If length of T array is greater than U, return 1;
  If length of U array is greater than T, return -1;
  If length of T array is equal to U, return 0.

  > View on GitHub: https://tsch.js.org/34007
*/

/* _____________ Your Code Here _____________ */

type CompareArrayLength<T extends any[], U extends any[]> = any

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CompareArrayLength<[1, 2, 3, 4], [5, 6]>, 1>>,
  Expect<Equal<CompareArrayLength<[1, 2], [3, 4, 5, 6]>, -1>>,
  Expect<Equal<CompareArrayLength<[], []>, 0>>,
  Expect<Equal<CompareArrayLength<[1, 2, 3], [4, 5, 6]>, 0>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/34007/answer
  > View solutions: https://tsch.js.org/34007/solutions
  > More Challenges: https://tsch.js.org
*/

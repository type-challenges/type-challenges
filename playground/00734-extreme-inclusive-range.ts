/*
  734 - Inclusive Range
  -------
  by Sg (@suica) #extreme #infer #array

  ### Question

  Recursion depth in type system is one of the limitations of TypeScript, the number is around 45.

  *We need to go deeper*. And we could go deeper.

  In this challenge, you are given one lower boundary and one higher boundary, by which a range of natural numbers is inclusively sliced. You should develop a technique that enables you to do recursion deeper than the limitation, since both boundary vary from 0 to 200.

  Note that when `Lower > Higher`, output an empty tuple.

  > View on GitHub: https://tsch.js.org/734
*/

/* _____________ Your Code Here _____________ */

type InclusiveRange<Lower extends number, Higher extends number> = any

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<InclusiveRange<200, 1>, []>>,
  Expect<Equal<InclusiveRange<10, 5>, []>>,
  Expect<Equal<InclusiveRange<5, 5>, [5]>>,
  Expect<Equal<InclusiveRange<0, 10>, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]>>,
  Expect<Equal<InclusiveRange<1, 200>, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200]>>,
  Expect<Equal<InclusiveRange<22, 146>, [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146]>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/734/answer
  > View solutions: https://tsch.js.org/734/solutions
  > More Challenges: https://tsch.js.org
*/

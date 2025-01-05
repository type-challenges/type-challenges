/*
  35252 - IsAlphabet
  -------
  by Kanon (@ysknsid25) #medium

  ### Question

  Determine if the given letter is an alphabet.

  > View on GitHub: https://tsch.js.org/35252
*/

/* _____________ Your Code Here _____________ */

type IsAlphabet<S extends string> = any

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsAlphabet<'A'>, true>>,
  Expect<Equal<IsAlphabet<'z'>, true>>,
  Expect<Equal<IsAlphabet<'9'>, false>>,
  Expect<Equal<IsAlphabet<'!'>, false>>,
  Expect<Equal<IsAlphabet<'😂'>, false>>,
  Expect<Equal<IsAlphabet<''>, false>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/35252/answer
  > View solutions: https://tsch.js.org/35252/solutions
  > More Challenges: https://tsch.js.org
*/

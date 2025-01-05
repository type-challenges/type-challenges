/*
  4803 - Trim Right
  -------
  by Yugang Cao (@Talljack) #medium #template-literal

  ### Question

  Implement `TrimRight<T>` which takes an exact string type and returns a new string with the whitespace ending removed.

  For example:

  ```ts
  type Trimed = TrimRight<'   Hello World    '> // expected to be '   Hello World'
  ```

  > View on GitHub: https://tsch.js.org/4803
*/

/* _____________ Your Code Here _____________ */

type TrimRight<S extends string> = any

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
  Expect<Equal<TrimRight<''>, ''>>,
  Expect<Equal<TrimRight<'\n\t '>, ''>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4803/answer
  > View solutions: https://tsch.js.org/4803/solutions
  > More Challenges: https://tsch.js.org
*/

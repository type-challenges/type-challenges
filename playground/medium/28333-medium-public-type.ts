/*
  28333 - Public Type
  -------
  by KaiKai (@kaikaibenkai) #medium #object-keys

  ### Question

  Remove the key starting with `_` from given type `T`.

  > View on GitHub: https://tsch.js.org/28333
*/

/* _____________ Your Code Here _____________ */

type PublicType<T extends object> = any

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<PublicType<{ a: number }>, { a: number }>>,
  Expect<Equal<PublicType<{ _b: string | bigint }>, {}>>,
  Expect<Equal<PublicType<{ readonly c?: number }>, { readonly c?: number }>>,
  Expect<Equal<PublicType<{ d: string, _e: string }>, { d: string }>>,
  Expect<Equal<PublicType<{ _f: () => bigint[] }>, {}>>,
  Expect<Equal<PublicType<{ g: '_g' }>, { g: '_g' }>>,
  Expect<Equal<PublicType<{ __h: number, i: unknown }>, { i: unknown }>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/28333/answer
  > View solutions: https://tsch.js.org/28333/solutions
  > More Challenges: https://tsch.js.org
*/

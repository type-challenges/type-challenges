/*
  30178 - Unique Items
  -------
  by Evgeniy (@bgenia) #hard #tuple #application #cif

  ### Question

  Some concepts in TypeScript can not be described by types, but can be expressed through type constraints. For example, you can't define a type for positive numbers, but you can check whether a number literal type is positive. One of the patterns for applying such constraints is constrained identity function (CIF). A CIF takes one parameter, infers its type, performs additional checks and returns the parameter unmodified.

  ```ts
  // Ensures `n` is a positive number
  function positive<const N extends number>(n: `${N}` extends `-${string}` ? never : N) {
    return n
  }

  const a = positive(1) // Ok
  const b = positive(-1) // Error, -1 is not assignable to never
  ```

  Write a CIF `uniqueItems` that takes a tuple of literals and ensures that all of them are unique.
  You are free to use either mutable or readonly tuples.

  Bonus task: Helpful error messages instead of `not assignable to never`.
  Bonus task: Only repeating tuple elements should be treated as errors, not the entire argument.

  > View on GitHub: https://tsch.js.org/30178
*/

/* _____________ Your Code Here _____________ */

function uniqueItems(items: any[]) {
  return items
}

/* _____________ Test Cases _____________ */
import type { Equal } from '@type-challenges/utils'

declare const readonlyEqual: <A>() => <T>(value: T) => Equal<Readonly<A>, Readonly<T>>
declare const expect: (value: true) => void

// Should work
expect(readonlyEqual<[1, 2, 3]>()(uniqueItems([1, 2, 3])))
expect(readonlyEqual<['a', 'b', 'c']>()(uniqueItems(['a', 'b', 'c'])))
expect(readonlyEqual<[1, 'a', true]>()(uniqueItems([1, 'a', true])))
expect(readonlyEqual<[undefined, null, 3, false]>()(uniqueItems([undefined, null, 3, false])))

// Should error
// @ts-expect-error
uniqueItems([1, 2, 2, 3, 4, 4, 5, 6])
// @ts-expect-error
uniqueItems([true, true, false, false, 'b', 'b'])
// @ts-expect-error
uniqueItems([1, 1])
// @ts-expect-error
uniqueItems([undefined, undefined])
// @ts-expect-error
uniqueItems([null, undefined, null])
// @ts-expect-error
uniqueItems(['test', undefined, 'test'])

// Bonus: Should give detailed errors
uniqueItems([
  1,
  2,
  // @ts-expect-error
  2,
  3,
  4,
  // @ts-expect-error
  4,
  6,
  7,
])

uniqueItems([
  true,
  // @ts-expect-error
  true,
  false,
  // @ts-expect-error
  false,
  'b',
  // @ts-expect-error
  'b',
])

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/30178/answer
  > View solutions: https://tsch.js.org/30178/solutions
  > More Challenges: https://tsch.js.org
*/

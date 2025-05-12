/*
  730 - Union to Tuple
  -------
  by Sg (@suica) #hard #union #tuple #infer

  ### Question

  Implement a type, `UnionToTuple`, that converts a union to a tuple.

  As we know, union is an unordered structure, but tuple is an ordered, which implies that we are not supposed to preassume any order will be preserved between terms of one union, when unions are created or transformed.

  Hence in this challenge, **any permutation of the elements in the output tuple is acceptable**.

  Your type should resolve to one of the following two types, but ***NOT*** a union of them!
  ```ts
  UnionToTuple<1>           // [1], and correct
  UnionToTuple<'any' | 'a'> // ['any','a'], and correct
  ```
  or
  ```ts
  UnionToTuple<'any' | 'a'> // ['a','any'], and correct
  ```
  It shouldn't be a union of all acceptable tuples...
  ```ts
  UnionToTuple<'any' | 'a'> // ['a','any'] | ['any','a'], which is incorrect
  ```


  And a union could collapes, which means some types could absorb (or be absorbed by) others and there is no way to prevent this absorption. See the following examples:
  ```ts
  Equal<UnionToTuple<any | 'a'>,       UnionToTuple<any>>         // will always be a true
  Equal<UnionToTuple<unknown | 'a'>,   UnionToTuple<unknown>>     // will always be a true
  Equal<UnionToTuple<never | 'a'>,     UnionToTuple<'a'>>         // will always be a true
  Equal<UnionToTuple<'a' | 'a' | 'a'>, UnionToTuple<'a'>>         // will always be a true
  ```

  > View on GitHub: https://tsch.js.org/730
*/

/* _____________ Your Code Here _____________ */

type UnionToTuple<T> = any

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type ExtractValuesOfTuple<T extends any[]> = T[keyof T & number]

type cases = [
  Expect<Equal<UnionToTuple<'a' | 'b'>['length'], 2>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b'>>, 'a' | 'b'>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a'>>, 'a'>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any>>, any>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<undefined | void | 1>>, void | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'d' | 'f' | 1 | never>>, 'f' | 'd' | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<[{ a: 1 }] | 1>>, [{ a: 1 }] | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<never>>, never>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b' | 'c' | 1 | 2 | 'd' | 'e' | 'f' | 'g'>>, 'f' | 'e' | 1 | 2 | 'g' | 'c' | 'd' | 'a' | 'b'>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/730/answer
  > View solutions: https://tsch.js.org/730/solutions
  > More Challenges: https://tsch.js.org
*/

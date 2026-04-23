import type { Equal, Expect } from '@type-challenges/utils'

type IsValidJSON<T> = T extends JSONValue ? true : false

type cases = [
  // primitives
  Expect<Equal<IsValidJSON<null>, true>>,
  Expect<Equal<IsValidJSON<boolean>, true>>,
  Expect<Equal<IsValidJSON<number>, true>>,
  Expect<Equal<IsValidJSON<string>, true>>,

  // flat structures
  Expect<Equal<IsValidJSON<string[]>, true>>,
  Expect<Equal<IsValidJSON<{ key: string }>, true>>,

  // nested valid
  Expect<Equal<IsValidJSON<{ scores: number[] }>, true>>,             // object containing array
  Expect<Equal<IsValidJSON<number[][]>, true>>,                       // array of arrays
  Expect<Equal<IsValidJSON<{ a: { b: { c: string } } }>, true>>,     // deep object nesting
  Expect<Equal<IsValidJSON<{ friends: { name: string }[] }>, true>>, // object with array of objects

  // invalid
  Expect<Equal<IsValidJSON<undefined>, false>>,
  Expect<Equal<IsValidJSON<symbol>, false>>,
  Expect<Equal<IsValidJSON<() => void>, false>>,

  // nested invalid
  Expect<Equal<IsValidJSON<{ key: undefined }>, false>>,
  Expect<Equal<IsValidJSON<{ a: { b: undefined } }>, false>>,  // invalid buried inside object
  Expect<Equal<IsValidJSON<[undefined]>, false>>,              // invalid inside array
]

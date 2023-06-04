import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MergeAll<[]>, {} >>,
  Expect<Equal<MergeAll<[{ a: 1 }]>, { a: 1 }>>,
  Expect<Equal<
    MergeAll<[{ a: string }, { a: string }]>,
    { a: string }>
  >,
  Expect<Equal<
    MergeAll<[{ }, { a: string }]>,
    { a: string }>
  >,
  Expect<Equal<
    MergeAll<[{ a: 1 }, { c: 2 }]>,
    { a: 1; c: 2 }>
  >,
  Expect<Equal<
    MergeAll<[{ a: 1; b: 2 }, { a: 2 }, { c: 3 }]>,
    { a: 1 | 2; b: 2; c: 3 }>
  >,
  Expect<Equal<MergeAll<[{ a: 1 }, { a: number }]>, { a: number }>>,
  Expect<Equal<MergeAll<[{ a: number }, { a: 1 }]>, { a: number }>>,
  Expect<Equal<MergeAll<[{ a: 1 | 2 }, { a: 1 | 3 }]>, { a: 1 | 2 | 3 }>>,
]

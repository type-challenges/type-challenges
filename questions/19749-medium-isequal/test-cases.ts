import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsEqual<number, string>, false>>,
  Expect<Equal<IsEqual<1, 1>, true>>,
  Expect<Equal<IsEqual<any, 1>, false>>,
  Expect<Equal<IsEqual<1 | 2, 1>, false>>,
  Expect<Equal<IsEqual<any, never>, false>>,
  Expect<Equal<IsEqual<[any], [number]>, false>>,
]

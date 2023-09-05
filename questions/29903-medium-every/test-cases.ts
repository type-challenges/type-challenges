import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Every<[], 1>, false>>,
  Expect<Equal<Every<[1, 1, 1], 1>, true>>,
  Expect<Equal<Every<[1, 1, 2], 1>, false>>,
  Expect<Equal<Every<[1, 1, number], 1>, false>>,
  Expect<Equal<Every<[string, string, string], string>, true>>,
  Expect<Equal<Every<[1 | 2,  1], 1 | 2>, false>>,
  Expect<Equal<Every<[1 | 2,  1 | 2], 1 | 2>, true>>,
  Expect<Equal<Every<[1, 1, 1], any>, false>>
]

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Add<1, 1>, 2>>,
  Expect<Equal<Add<2, 2>, 4>>,
  Expect<Equal<Add<5, 7>, 12>>,
]

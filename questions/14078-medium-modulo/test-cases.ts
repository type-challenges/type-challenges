import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Modulo<5, 4>, 1>>,
  Expect<Equal<Modulo<9, 4>, 1>>,
  Expect<Equal<Modulo<16, 2>, 0>>,
  Expect<Equal<Modulo<35, 1>, 0>>,
  Expect<Equal<Modulo<35, 10>, 5>>
]

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsOdd<5>, true>>,
  Expect<Equal<IsOdd<2023>, true>>,
  Expect<Equal<IsOdd<1453>, true>>,
  Expect<Equal<IsOdd<1926>, false>>,
  Expect<Equal<IsOdd<2.3>, false>>,
  Expect<Equal<IsOdd<3e23>, false>>,
  Expect<Equal<IsOdd<3e0>, true>>,
  Expect<Equal<IsOdd<1.1e1>, true>>,
  Expect<Equal<IsOdd<1.01e2>, true>>,
  Expect<Equal<IsOdd<1.2e1>, false>>,
  Expect<Equal<IsOdd<1.02e2>, false>>,
  Expect<Equal<IsOdd<100e-2>, true>>,
  Expect<Equal<IsOdd<320e-1>, false>>,
  Expect<Equal<IsOdd<number>, false>>,
]

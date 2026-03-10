import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<OddNumbers<21>, 1 | 3 | 5 | 7 | 9 | 11 | 13 | 15 | 17 | 19 | 21>>,
  Expect<Equal<OddNumbers<16>, 1 | 3 | 5 | 7 | 9 | 11 | 13 | 15>>,
  Expect<Equal<EvensNumbers<16>, 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 >>,
  Expect<Equal<EvensNumbers<21>, 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20>>,
]

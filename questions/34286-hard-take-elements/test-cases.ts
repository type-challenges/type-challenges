import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Take<2, [1, 2, 3]>, [1, 2]>>,
  Expect<Equal<Take<3, ['1', 2, true, false]>, ['1', 2, true]>>,
  Expect<Equal<Take<-2, [1, 2, 3]>, [2, 3]>>,
  Expect<Equal<Take<0, [1, 2, 3]>, []>>,
  Expect<Equal<Take<5, [1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<Take<3, []>, []>>,
]

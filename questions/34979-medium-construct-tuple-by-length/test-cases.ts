import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ConstructTupleByLength<unknown, 0>, []>>,
  Expect<Equal<ConstructTupleByLength<number | string, 2>, [number | string, number | string]>>,
]

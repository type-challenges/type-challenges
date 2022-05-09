import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TwoSum<[1,2,3,4], 6>, true>>,
  Expect<Equal<TwoSum<[1,2,3,4], 9>, false>>,
  Expect<Equal<TwoSum<[1,9], 2>, false>>,
  Expect<Equal<TwoSum<[1,1,9], 2>, true>>,
]

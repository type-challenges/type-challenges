import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TwoSum<[2, 7, 11, 5], 9>, [0, 1]>>,
  Expect<Equal<TwoSum<[3, 2, 4], 6>, [1, 2]>>,
  Expect<Equal<TwoSum<[3, 3], 6>, [0, 1]>>,
  Expect<Equal<TwoSum<[2, 7, 11, 5], 10>, []>>,
  Expect<Equal<TwoSum<[1, 3, 6, 7, 9], 10>, [0, 4]>>,
]

import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ArrayRemove<[1, 2], 1>, [2]>>,
  Expect<Equal<ArrayRemove<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<ArrayRemove<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
]

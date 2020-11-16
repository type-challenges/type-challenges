import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Add<1, 2>, 3>>,
  Expect<Equal<Add<2, 3 | 4>, 5 | 6>>,
  Expect<Equal<Add<1 | 2, 3 | 4>, 4 | 5 | 6>>,
]

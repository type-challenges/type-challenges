import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Add<1, 2>, 3>>
  Expect<Equal<Add<100, 100>, 200>>
]

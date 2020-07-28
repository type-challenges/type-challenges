import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Head<[3, 2, 1]>, 3>>,
  Expect<Equal<Head<[() => 123, { a: string }]>, () => 123>>,
]

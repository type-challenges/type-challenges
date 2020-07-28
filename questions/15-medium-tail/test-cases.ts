import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Tail<[3, 2, 1]>, 1>>,
  Expect<Equal<Tail<[() => 123, { a: string }]>, { a: string }>>,
]

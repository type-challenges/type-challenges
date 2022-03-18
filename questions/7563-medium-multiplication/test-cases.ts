import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Multiplication<10, 10>, 100>>,
  Expect<Equal<Multiplication<10, 0>, 0>>,
  Expect<Equal<Multiplication<2, 5>, 10>>,
  // @ts-expect-error
  Expect<Equal<Multiplication<100, 100>, 10000>>
]

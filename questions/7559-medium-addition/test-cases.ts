import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Addition<0, 0>, 0>>,
  Expect<Equal<Addition<10, 10>, 20>>,
  Expect<Equal<Addition<999, 999>, 1998>>,
  // @ts-expect-error
  Expect<Equal<Addition<1000, 999>, 1999>>
]

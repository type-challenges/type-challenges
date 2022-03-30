import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pow<3, 3>, 27>>,
  Expect<Equal<Pow<10, 0>, 1>>,
  Expect<Equal<Pow<2, 10>, 1024>>
]

import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
   Expect<Equal<Multiply<3, 3>, 9>>,
   Expect<Equal<Multiply<10, 0>, 0>>,
   Expect<Equal<Multiply<0, 10>, 0>>
]

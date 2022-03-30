import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Divide<10, 3>, 3>>,
  Expect<Equal<Divide<10, 2>, 5>>,
  Expect<Equal<Divide<10, 0>, never>>
]

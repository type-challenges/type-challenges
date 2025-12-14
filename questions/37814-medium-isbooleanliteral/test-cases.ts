import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsBooleanLiteral<true>, true>>,
  Expect<Equal<IsBooleanLiteral<false>, true>>,
  Expect<Equal<IsBooleanLiteral<boolean>, false>>,
]

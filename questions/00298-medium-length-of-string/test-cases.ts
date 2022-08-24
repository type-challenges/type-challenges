import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StringLength<''>, 0>>,
  Expect<Equal<StringLength<'kumiko'>, 6>>,
  Expect<Equal<StringLength<'reina'>, 5>>,
  Expect<Equal<StringLength<'Sound! Euphonium'>, 16>>,
]

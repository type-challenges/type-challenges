import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsAllOfAKind<['one'], 'one'>, true>>,
  Expect<Equal<IsAllOfAKind<['one', 'one'], 'one'>, false>>,
  Expect<Equal<IsAllOfAKind<[], 'one'>, false>>,
  Expect<Equal<IsAllOfAKind<['one'], 'two'>, false>>,
  Expect<Equal<IsAllOfAKind<['one', 'two'], 'one' | 'two'>, true>>,
]

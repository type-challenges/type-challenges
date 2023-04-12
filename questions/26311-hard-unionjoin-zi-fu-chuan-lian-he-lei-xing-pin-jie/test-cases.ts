import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<UnionJoin<'hello' | 'world'>, 'hello,world'>>,
  Expect<Equal<UnionJoin<'hello'>, 'hello'>>,
  Expect<Equal<UnionJoin<'hello' | 'world' | 'hi'>, 'hello,world,hi'>>,
  Expect<Equal<UnionJoin<''>, ''>>
]

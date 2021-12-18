import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Prefix<'api', ''>, false>>,
  Expect<Equal<Prefix<'api', 'foo'>, false>>,
  Expect<Equal<Prefix<'api', 'foo/api'>, false>>,
  Expect<Equal<Prefix<'api', 'api/foo'>, true>>,
  Expect<Equal<Prefix<'api', 'apifoo'>, true>>,
]

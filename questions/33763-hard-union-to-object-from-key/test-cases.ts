import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type Foo = {
  foo: string;
  common: boolean
}

type Bar = {
  bar: number;
  common: boolean
}

type Other = {
  otheer: string
}

type cases = [
  Expect<Equal<UnionToObjectFromKey<Foo | Bar, 'foo'>, Foo>>,
  Expect<Equal<UnionToObjectFromKey<Foo | Bar, 'common'>, { common: boolean }>>,
  Expect<Equal<UnionToObjectFromKey<Foo | Bar | Other, 'common'>, { common: boolean }>>,
]

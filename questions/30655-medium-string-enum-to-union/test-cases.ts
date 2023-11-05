import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

enum A {
  a = 'aa',
  b = 'bb',
  c = 'cc'
}

enum B {
  a = 'aa',
}

enum C {
  a, b
}

enum D {
  No,
  Yes = "YES",
}

type cases = [
  Expect<Equal<EnumToUnion<A>, 'aa' | 'bb' | 'cc'>>,
  Expect<Equal<EnumToUnion<B>, 'aa'>>,
  // @ts-expect-error
  EnumToUnion<C>,
  // @ts-expect-error
  EnumToUnion<D>
]

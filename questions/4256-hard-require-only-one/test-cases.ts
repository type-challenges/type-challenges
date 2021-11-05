import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<RequireOnlyOne<{a?: string, b?: string}, "a">, {a: string, b?: string}>>,
  Expect<Equal<RequireOnlyOne<{a?: string, b?: string, c: string}, "c">, {a?: string, b?: string, c: string}>>,
]

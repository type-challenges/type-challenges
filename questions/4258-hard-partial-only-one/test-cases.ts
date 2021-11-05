import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<PartialOnlyOne<{a: string, b: string}, "a">, {a?: string, b: string}>>,
  Expect<Equal<PartialOnlyOne<{a: string, b: string, c?: string}, "a">, {a?: string, b: string, c?: string}>>,
  Expect<Equal<PartialOnlyOne<{a: string, b: string, c: string}, "c">, {a: string, b: string, c?: string}>>,
]

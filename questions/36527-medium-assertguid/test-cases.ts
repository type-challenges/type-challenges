import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<AssertGuid<'12345678-1234-1234-1234-1234567890Ab'>, '12345678-1234-1234-1234-1234567890Ab'>>,
  Expect<Equal<AssertGuid<'1234567a-123b-12c4-1d34-12345e7890Ab'>, '1234567a-123b-12c4-1d34-12345e7890Ab'>>,
  Expect<Equal<AssertGuid<'1234567-12345-12-123456-1234567890ab'>, never>>,
  Expect<Equal<AssertGuid<'12345678-1234-1234-1234-1234567890gh'>, never>>,
  Expect<Equal<AssertGuid<'12345678-1234-1234-1234567890ab'>, never>>,
  Expect<Equal<AssertGuid<'this-is-a-guid'>, never>>,
]

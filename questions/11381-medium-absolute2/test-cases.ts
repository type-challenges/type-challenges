import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
	Expect<Equal<Absolute<'-0_'>, '0'>>,
	Expect<Equal<Absolute<'#1_0'>, '10'>>,
]

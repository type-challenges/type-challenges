import type { Equal, Expect } from '@type-challenges/utils'
import type { Last } from './template'

type cases = [
  Expect<Equal<Last<[1, 2, 3]>, 3>>,
  Expect<Equal<Last<['a', 'b', 'c']>, 'c'>>,
  Expect<Equal<Last<[]>, never>>,
]

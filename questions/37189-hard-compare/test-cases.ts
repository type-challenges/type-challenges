import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type Test01 = 100
type Test02 = 200
type Test03 = 100.1
type Test04 = 200.1
type Test05 = -100
type Test06 = -200
type Test07 = -100.1
type Test08 = -200.1
type Test09 = 1e25
type Test10 = 1e28
type Test11 = 1.5e25
type Test12 = 1.5e28
type Test13 = -1e25
type Test14 = -1e28
type Test15 = -1.5e25
type Test16 = -1.5e28
type Test17 = 1e-8
type Test18 = 1e-10
type Test19 = 1.5e-8
type Test20 = 1.5e-10
type Test21 = -1e-8
type Test22 = -1e-10
type Test23 = -1.5e-8
type Test24 = -1.5e-10

type cases = [
  Expect<Equal<Compare<number, Test01>, -1 | 0 | 1>>,
  Expect<Equal<Compare<Test01, Test02>, -1>>,
  Expect<Equal<Compare<Test01, Test03>, -1>>,
  Expect<Equal<Compare<Test03, Test04>, -1>>,
  Expect<Equal<Compare<Test01, Test07>, 1>>,
  Expect<Equal<Compare<Test01, Test09>, -1>>,
  Expect<Equal<Compare<Test09, Test10>, -1>>,
  Expect<Equal<Compare<Test09, Test11>, -1>>,
  Expect<Equal<Compare<Test11, Test12>, -1>>,
  Expect<Equal<Compare<Test14, Test15>, -1>>,
  Expect<Equal<Compare<Test17, Test19>, -1>>,
  Expect<Equal<Compare<Test21, Test22>, -1>>,
]

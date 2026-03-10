import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<VoidFunction, () => void>>,
  Expect<Equal<VoidFunction<boolean>, (arg: boolean) => void>>,
  Expect<Equal<VoidFunction<[boolean, boolean]>, (arg1: boolean, arg2: boolean) => void>>,
  Expect<Equal<VoidFunction<[boolean, boolean, boolean]>, (...args: [boolean, boolean, boolean]) => void>>,
]

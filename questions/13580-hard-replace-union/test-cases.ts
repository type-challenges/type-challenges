import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  // string -> null
  Expect<Equal<UnionReplace<number | string, [[string, null]]>, number | null>>,

  // Date -> string; Function -> undefined
  Expect<Equal<UnionReplace<Function | Date | object, [[Date, string], [Function, undefined]]>, undefined | string | object>>,

  // Date -> string; object -> undefined
  Expect<Equal<UnionReplace<Function | Date | object, [[Date, string], [object, undefined]]>, Function | string | undefined>>,

  // () => number -> never
  Expect<Equal<UnionReplace<(() => 0) | (() => number), [[() => number, never]]>, () => 0>>,
]

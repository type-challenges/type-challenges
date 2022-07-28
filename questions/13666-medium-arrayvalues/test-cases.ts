import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

const arrayVariable = ["number",3]
type cases = [
  Expect<Equal<ArrayValues<["hi","there"]>, "hi" | "there">>,
  Expect<Equal<ArrayValues<[]>, never>>,
  Expect<Equal<ArrayValues<typeof arrayVariable>, string | number>>,
]

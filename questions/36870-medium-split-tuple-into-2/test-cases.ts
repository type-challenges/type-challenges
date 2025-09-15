import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<SplitTupleInto2<[0,1,2,3,4,5,6,7,8,9]>, [[0,1,2,3,4],[5,6,7,8,9]]>>,
  Expect<Equal<SplitTupleInto2<["a","b","c","d","e","f"]>, [["a","b","c"],["d","e","f"]]>>,
  Expect<Equal<SplitTupleInto2<[]>, [[],[]]>>,
]

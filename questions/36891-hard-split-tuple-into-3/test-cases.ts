import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<SplitTupleInto3<[]>, [[],[],[]]>>,
  Expect<Equal<SplitTupleInto3<[boolean,123n,'type-challenges']>, [[boolean],[123n],['type-challenges']]>>,
  Expect<Equal<SplitTupleInto3<[1,2,3,4,5,6]>, [[1,2],[3,4],[5,6]]>>,
  Expect<Equal<SplitTupleInto3<[1|2,'a',string&boolean,{id:0},,unknown]>, [[1|2,'a'],[never,{id:0;}],[any,unknown]]>>,
  Expect<Equal<SplitTupleInto3<[[],[],[],[[]],[[]],[[]],[[],[]],[[],[]],[[],[]]]>, [[[],[],[]],[[[]],[[]],[[]]],[[[],[]],[[],[]],[[],[]]]]>>,
  Expect<Equal<SplitTupleInto3<[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]>, [[1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20],[21,22,23,24,25,26,27,28,29,30]]>>,
]

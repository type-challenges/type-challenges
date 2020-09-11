import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<[1]>, [1]>>,
  Expect<Equal<Reverse<[1, 2]>, [2, 1]>>,
  Expect<Equal<Reverse<[1, undefined, '3']>, ['3', undefined, 1]>>,
  Expect<Equal<Reverse<[[1, 2], [3, 4]]>, [[3, 4], [1, 2]]>>,
]

import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StringToUnion<'1', ','>, '1'>>,
  Expect<Equal<StringToUnion<'1,2,3', ','>, '1' | '2' | '3'>>,
  Expect<Equal<StringToUnion<'1:2:3', ':'>, '1' | '2' | '3'>>,
  Expect<Equal<StringToUnion<'first,second', ','>, 'first' | 'second'>>,
];

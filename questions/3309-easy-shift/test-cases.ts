import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Shift<[1]>, 1>>,
  Expect<Equal<Shift<[1, 2, 3]>, 1>>,
  Expect<Equal<Shift<['a', 'b', 'c']>, 'a'>>,
  Expect<Equal<Shift<[1, '2', 3]>, 1>>,
  Expect<Equal<Shift<[boolean, 1, 'a']>, boolean>>,
  Expect<Equal<Shift<[{a: '1'}, {}]>, {a: '1'}>>,
  Expect<Equal<Shift<[]>, never>>,
]

import type { Equal, ExpectFalse } from '@type-challenges/utils'

type cases = [
  Expect<Equal<YourType<PartialObject, 'a' | 'c'>, { a: number; c: boolean; }>>,
  ExpectFalse<YourType<PartialObject, 'b' | 'd'>>,
]

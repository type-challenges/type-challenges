import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Permutate<['foo', 'bar', 'baz']>,
  'foo' | 'bar' | 'baz' | 'foo bar baz' | 'bar foo' | 'baz foo' | 'bar baz' | 'baz bar'>>,
]

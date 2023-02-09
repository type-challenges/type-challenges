import type { Equal, Expect } from '../../utils'
import type { TupleToUnion } from './template'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]

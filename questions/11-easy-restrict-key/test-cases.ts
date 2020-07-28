import { Equal, Expect } from '@type-challenges/utils'

const list = ['pop', 'slice', 'push', 'concat']

type cases = [
  Expect<Equal<TupleToObject<list>, { pop: 'pop', slice: 'slice', concat: 'concat'}>>,
]

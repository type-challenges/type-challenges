import { Equal, Expect } from '@type-challenges/utils'

const list = ['pop', 'slice', 'push', 'concat']

type O = {}

type cases = [
  Expect<Equal<keyof O, 'pop'| 'slice'| 'push'| 'concat'>>,
]

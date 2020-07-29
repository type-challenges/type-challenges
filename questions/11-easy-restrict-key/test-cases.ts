import { Equal, Expect } from '@type-challenges/utils'

const list = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof list>, { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}>>,
]

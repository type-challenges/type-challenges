import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<9999>['length'], 9999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<10000>['length'], 10000>>,
]

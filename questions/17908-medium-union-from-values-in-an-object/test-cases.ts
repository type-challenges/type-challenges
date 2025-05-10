import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<UnionOfArrayValuesInObject<typeof object1WithObjectArrays>, 'one' | 'two' | 'three'>>,
  Expect<Equal<UnionOfArrayValuesInObject<typeof object2WithObjectArrays>, 1 | 2 | 3 >>,
  Expect<Equal<UnionOfArrayValuesInObject<typeof AllMeasurementUnits>, 'g' | 'kg' | 'pound' | 'cm' | 'm' | 'inch'>>,
]

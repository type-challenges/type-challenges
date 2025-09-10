const object1WithObjectArrays= {
  key: ['one', 'two', 'three']
} as const

const object2WithObjectArrays= {
  key: [1, 2, 3]
} as const

const AllMeasurementUnits = {
  weight: ['g', 'kg', 'pound'],
  length: ['cm', 'm', 'inch']
} as const

type UnionOfArrayValuesInObject<T> = any

const oneString: UnionOfArrayValuesInObject<typeof object1WithObjectArrays> = 'one' //should be a valid type
const oneNumber: UnionOfArrayValuesInObject<typeof object2WithObjectArrays> = 1 //should be a valid type
const grams: UnionOfArrayValuesInObject<typeof AllMeasurementUnits> = 'g' //should be a valid type

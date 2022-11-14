Create a generalizable type UnionOfArrayValuesInObject that can be used to create a union type of all the values from all the array values inside an object that contains object keys and arrays as the objects. 

The task is solvable without using utility types.

```ts
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
const fourString: UnionOfArrayValuesInObject<typeof object2WithObjectArrays> = 'four' //shouldn't be a valid type

const oneNumber: UnionOfArrayValuesInObject<typeof object2WithObjectArrays> = 1 //should be a valid type

const grams: UnionOfArrayValuesInObject<typeof AllMeasurementUnits> = 'g' //should be a valid type
const ounce: UnionOfArrayValuesInObject<typeof AllMeasurementUnits> = 'ounce' //shouldn't be a valid type
```

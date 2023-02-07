type arr1 = ['a', 'b', 'c']
type arr2 = [2, 3, 4]

type First<T extends any[]> = T extends [infer P, ...any] ? P : never
type FirstV3<T extends any[]> = T['length'] extends 0 ? never : T[0]

// not a great solution as it wont work with zero length array
// type FirstV2<T extends any[]> = T extends any[] ? T[0] : never

type a = First<arr1>
type b = First<arr2>

type c = FirstV3<arr1>
type d = FirstV3<[]>
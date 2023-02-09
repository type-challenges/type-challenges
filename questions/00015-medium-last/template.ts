export type Last<T extends unknown[]> = T extends [...unknown[], infer tail] ? tail : never

type arr = ['a', 'b', 'c']
type tail = Last<arr> // return 'c'

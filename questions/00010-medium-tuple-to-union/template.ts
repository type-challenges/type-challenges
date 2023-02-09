export type TupleToUnion<T extends unknown[]> = T[number]

type Arr = ['1', '2', '3']
type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'


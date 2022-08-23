/*
Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.

For example

type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
*/

type TupleToUnion<T extends unknown[]> = T[number]
// extend whatever array type you get
// assign each element in the array to its own type in a union type

/*
Write a type that takes an array and emitted the flatten array type.

For example:
type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
 */

type Flatten<T> = T extends [infer Top, ...infer Tail]
  ? Top extends unknown[]
    ? [...Flatten<Top>, ...Flatten<Tail>]
    : [Top, ...Flatten<Tail>]
  : T

// T will be inferring an array.
// The inferred Top will need to extend an array of unknown
// If it's an array, recursively send the Top back into Flatten, along with the Tail
// Otherwise, add Top to the array and recursively pass in the Tail to Flatten
// Eventually, it's all flattened and T is finally returned as a fully flattened array

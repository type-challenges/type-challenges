/*
Implement a generic First<T> that takes an Array T and returns it's first element's type.

For example:

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
*/

// T extends any to accommodate error checking
// then T extends an array where we infer the first index and don't care about the rest
// return the first index type
// otherwise return
type First<T extends any[]> = T extends [infer firstIndex, ...any] ? firstIndex : never

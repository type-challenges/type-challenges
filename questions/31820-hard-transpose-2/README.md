Transposition is a math concept.
We can use a 2d tuples to describe a matrix in TS.
But tuples in TS aren't always squares, which makes the transposition of 2d tuples become more difficult.

```ts
type SomeMatrix = [
  [1, 2, 3],
  [4, 5],
  [6]
];
type TransposedSomeMatrix = [
  [1, 4, 6],
  [2, 5],
  [3]
];
``` 

It's easy to understand, so the mission of making a type which can transpose given 2d tuple as accurate as possible is now assigned to you!

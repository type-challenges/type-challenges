The trace of a square matrix is the sum of the elements on its main diagonal.
However, it's difficult to calculate the sum with type system. 
To make things simple, let's return the elements on the main diagonal with union type.


For example:

```ts
type Arr = [
  [1,2],
  [3,4]
]
type Test = Trace<Arr> // expected to be 1 | 4
```

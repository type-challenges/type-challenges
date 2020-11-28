Implement a type `FilterOut<T, F>` that filters out items of the given type `F` from the tuple `T`.

For example,
```ts
type Filtered = FilterOut<[1, 2, null, 3], null> // [1, 2, 3]
```

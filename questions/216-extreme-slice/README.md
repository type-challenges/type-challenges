Implement the JavaScript `Array.slice` function in the type system. `Slice<Arr, Start, End>` takes the tree argument. The output should be a subarray of `Arr` from index `Start` to `End`. Indexes with negative numbers should be counted from reversely.

For example

```ts
type Arr = [1, 2, 3, 4, 5]
type Result = Slice<Arr, 2, 4> // expected to be [3, 4]
```

Implement a type `Take<N, Arr>` that returns the first `N` elements from an array `Arr`. If `N` is negative, return the last `|N|` elements

For example,
```ts
type T0 = Take<2, [1, 2, 3]> // [1, 2]
type T1 = Take<3, ['1', 2, true, false]> // ['1', 2, true]
type T2 = Take<-2, [1, 2, 3]> // [2, 3]
type T3 = Take<0, [1, 2, 3]> // []
type T4 = Take<5, [1, 2, 3]> // [1, 2, 3]
type T5 = Take<3, []> // []
```

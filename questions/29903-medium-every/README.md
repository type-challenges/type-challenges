Implement the type version of`Array.every`, `Every<T, U>` takes an Array `T`, any `U` , if every member of the `T` is equal to `U`, return `true`, otherwise, return `false`.

For example:

```ts
type test1 = Every<[], 1> // false
type test2 = Every<[1, 1, 1], 1> // true
type test3 = Every<[1, 1, 2], 1> // false
type test4 = Every<[1, 1, number], 1> // false
type test5 = Every<[string, string, string], string> // true
type test6 = Every<[1 | 2,  1], 1 | 2> // false
type test7 = Every<[1 | 2,  1 | 2], 1 | 2> // true
type test8 = Every<[1, 1, 1], any> // false
```

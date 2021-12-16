Implement the type version of Array.indexOf, indexOf<T, U> takes an Array T, any U and returns the index of the first U in Array T.

```ts
type Res = IndexOf<[1, 2, 3], 2>; // excepted to be 1
type Res1 = IndexOf<[2,6, 3,8,4,1,7, 3,9], 3>; // excepted to be 2
type Res2 = IndexOf<[0, 0, 0], 2>; // excepted to be -1
```

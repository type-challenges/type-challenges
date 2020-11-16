In addition to string literal types, TypeScript supports _numeric_ literal types:

```ts
type One = 1
type TwoOrThree = 2 | 3
```

If you have two numbers, it's natural to want to add them! For example:

```ts
type T1 = Add<1, 2>          // should be 3
type T2 = Add<2, 3 | 4>      // should be 5 | 6
type T3 = Add<1 | 2, 3 | 4>  // should be 4 | 5 | 6
```

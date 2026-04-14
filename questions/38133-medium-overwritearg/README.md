Implement a generic type `OverwriteArg<F, N, T>` that replaces the type of the `N`th argument (0-indexed) of a function `F` with type `T`, while keeping all other argument types and the return type unchanged.

```ts
type F = (a: string, b: number, c: boolean) => void

type R1 = OverwriteArg<F, 0, Date>
// => (a: Date, b: number, c: boolean) => void

type R2 = OverwriteArg<F, 1, string[]>
// => (a: string, b: string[], c: boolean) => void

type R3 = OverwriteArg<F, 2, null>
// => (a: string, b: number, c: null) => void
```

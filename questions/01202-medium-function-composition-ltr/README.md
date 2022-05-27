Write a generic type that takes a non-empty array of *single-parameter* functions and returns a function
with the same parameter type and return type as the first and last functions
in the array respectively, if and only if the parameter type of each function matches
the return type of the function before it (*left-to-right*).

```ts
type composed = Compose<[(x: number) => string, (y: string) => boolean]> // (x: number) => boolean
```

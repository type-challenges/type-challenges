Some concepts in TypeScript can not be described by types, but can be expressed through type constraints. For example, you can't define a type for positive numbers, but you can check whether a number literal type is positive. One of the patterns for applying such constraints is constrained identity function (CIF). A CIF takes one parameter, infers its type, performs additional checks and returns the parameter unmodified.

```ts
// Ensures `n` is a positive number
function positive<const N extends number>(n: `${N}` extends `-${string}` ? never : N) {
  return n
}

const a = positive(1) // Ok
const b = positive(-1) // Error, -1 is not assignable to never
```

Write a CIF `uniqueItems` that takes a tuple of literals and ensures that all of them are unique.
You are free to use either mutable or readonly tuples.

Bonus task: Helpful error messages instead of `not assignable to never`.
Bonus task: Only repeating tuple elements should be treated as errors, not the entire argument.

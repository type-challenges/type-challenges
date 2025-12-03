Implement a type that collapses a union of nested structures (objects, tuples, function returns) into a single type containing the union of all deepest primitive values.
```ts
type A = [{ a: { x: 1 }, b: [1, 2] }, 10]
type B = [{ a: { x: 2 }, b: [3, 4] }, 20]

type Result = Collapse<A | B>
//   ^? [
//        { a: { x: 1 | 2 }, b: [1 | 3, 2 | 4] },
//        10 | 20
//      ]
```
**Warning:** `Collapse` is an operation that worsens type precision.
Only use for:
- Demonstrative purposes
- Potentially, very large unions where heavy distributive conditional type operations may slow down the type checker.

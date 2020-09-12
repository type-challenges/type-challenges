For given function type F, and any type A (any in this context means we don't restrict the type, and I don't have in mind any type 😉) create a generic type which will take F as the first argument, A as the second, and will produce function type G which will be the same as F but with appended argument A as a first one.

```typescript
// lets say we have some function type
type SomeF = (a: number, b: string) => number
// and we have our utility type
type AppendArgument<F, A> = ... here your code 💪

type FinalF = AppendArgument<SomeF, boolean> 
// FinalF should be (x: boolean, a: number, b: string) => number
```

> This question is ported from the [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-4-495c) by [@maciejsikora](https://github.com/maciejsikora)

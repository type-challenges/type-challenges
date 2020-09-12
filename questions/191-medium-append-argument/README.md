<!--info-header-start--><h1>Append Argument <img src="https://img.shields.io/badge/-medium-eaa648" alt="medium"/> <img src="https://img.shields.io/badge/-%23arguments-999" alt="#arguments"/></h1><blockquote><p>by Maciej Sikora <a href="https://github.com/maciejsikora" target="_blank">@maciejsikora</a></p></blockquote><p><a href="https://tsch.js.org/191/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript" alt="Take the Challenge"/></a> </p><!--info-header-end-->

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


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/191/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/191/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
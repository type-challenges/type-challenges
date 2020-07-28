<!--info-header-start--><h1>Omit&lt;T, K&gt; <img src="https://img.shields.io/badge/-medium-eaa648" alt="medium"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/> <img src="https://img.shields.io/badge/-%23built--in-999" alt="#built-in"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://type-challenges.netlify.app/3/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Implement the built-in `Omit<T, K>` generic without using it.

Constructs a type by picking all properties from `T` and then removing `K`

For example

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}
```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://type-challenges.netlify.app/3/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <a href="https://type-challenges.netlify.app/3/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-green" alt="Share your Solutions"/></a> <!--info-footer-end-->
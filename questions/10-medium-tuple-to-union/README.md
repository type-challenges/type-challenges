<!--info-header-start--><h1>Deep Readonly <img src="https://img.shields.io/badge/-medium-eaa648" alt="medium"/> <img src="https://img.shields.io/badge/-%23readonly-999" alt="#readonly"/> <img src="https://img.shields.io/badge/-%23object--keys-999" alt="#object-keys"/> <img src="https://img.shields.io/badge/-%23deep-999" alt="#deep"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><a href="https://type-challenges.netlify.app/case/9/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript" alt="Take the Challenge"/></a> <br><br><!--info-header-end-->

Implement a generic `TupleToUnion<T>` which covers the values of a tuple to its values union.

For example

```ts
type Arr = ['1', '2', '3']

const a: TupleToUnion<X> // expected to be '1' | '2' | '3'
```

<!--info-footer-start--><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://type-challenges.netlify.app/case/9/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <a href="https://type-challenges.netlify.app/case/9/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-green" alt="Share your Solutions"/></a> <!--info-footer-end-->
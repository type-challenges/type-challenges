<!--info-header-start--><h1>MergeAll <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23object-999" alt="#object"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/></h1><blockquote><p>by scarf <a href="https://github.com/scarf005" target="_blank">@scarf005</a></p></blockquote><p><a href="https://tsch.js.org/27932/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Merge variadic number of types into a new type. If the keys overlap, its values should be merged into an union.

For example:

```ts
type Foo = { a: 1; b: 2 }
type Bar = { a: 2 }
type Baz = { c: 3 }

type Result = MergeAll<[Foo, Bar, Baz]> // expected to be { a: 1 | 2; b: 2; c: 3 }
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/27932/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/27932/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
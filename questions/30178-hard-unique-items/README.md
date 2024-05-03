<!--info-header-start--><h1>Unique Items <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23application-999" alt="#application"/> <img src="https://img.shields.io/badge/-%23cif-999" alt="#cif"/></h1><blockquote><p>by Evgeniy <a href="https://github.com/bgenia" target="_blank">@bgenia</a></p></blockquote><p><a href="https://tsch.js.org/30178/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

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


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/30178/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/30178/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
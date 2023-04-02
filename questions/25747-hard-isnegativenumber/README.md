<!--info-header-start--><h1>IsNegativeNumber <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23number-999" alt="#number"/> <img src="https://img.shields.io/badge/-%23template%20literal-999" alt="#template literal"/></h1><blockquote><p>by andrew jarrett <a href="https://github.com/ahrjarrett" target="_blank">@ahrjarrett</a></p></blockquote><p><a href="https://tsch.js.org/25747/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Sometimes when working with numeric literals, we need to rule out (or enforce) that the provided number is a positive integer.

To do that, we first need a way to tell if the number is negative.

Write a type-level function `IsNegativeNumber` that accepts a number `N` and returns:

- `true` if `N` is negative
- `false` if `N` is positive
- `false` if `N` is `0`, 
- `never` if `N` is `number`
- `never` if `N` is a union


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/25747/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/25747/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
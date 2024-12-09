<!--info-header-start--><h1>Trace <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> </h1><blockquote><p>by csharpython <a href="https://github.com/csharpython" target="_blank">@csharpython</a></p></blockquote><p><a href="https://tsch.js.org/35191/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

The trace of a square matrix is the sum of the elements on its main diagonal.
However, it's difficult to calculate the sum with type system. 
To make things simple, let's return the elements on the main diagonal with union type.


For example:

```ts
type Arr = [
  [1,2],
  [3,4]
]
type Test = Trace<Arr> // expected to be 1 | 4
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/35191/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/35191/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
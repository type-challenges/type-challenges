<!--info-header-start--><h1>Currying 1 <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/17/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> TypeScript 4.0 is recommended in this challenge

[Currying](https://en.wikipedia.org/wiki/Currying) is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument. 

For example:

```ts
const add = (a: number, b: number) => a + b
const three = add(1, 2)

const curriedAdd = Currying(add)
const five = curriedAdd(2)(3)
```

The function passed to `Currying` may have multiple arguments, you need to correctly type it.

In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, it should return its result.

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/17/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/17/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <hr><h3>Related Challenges</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md" target="_blank"><img src="https://img.shields.io/badge/-14%E3%83%BBFirst%20of%20Array-7aad0c" alt="14・First of Array"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.md" target="_blank"><img src="https://img.shields.io/badge/-16%E3%83%BBPop-d9901a" alt="16・Pop"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00462-extreme-currying-2/README.md" target="_blank"><img src="https://img.shields.io/badge/-462%E3%83%BBCurrying%202-b11b8d" alt="462・Currying 2"/></a> <!--info-footer-end-->

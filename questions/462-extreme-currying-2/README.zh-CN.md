<!--info-header-start--><h1>柯里化 2 <img src="https://img.shields.io/badge/-%E5%9C%B0%E7%8B%B1-b11b8d" alt="地狱"/> </h1><blockquote><p>by Kim <a href="https://github.com/hubvue" target="_blank">@hubvue</a></p></blockquote><p><a href="https://tsch.js.org/462/play/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-3178c6?logo=typescript&logoColor=white" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

[Currying](https://en.wikipedia.org/wiki/Currying) 是一种将带有多个参数的函数转换为每个带有一个参数的函数序列的技术。

但是在前端的日常开发中，柯里化函数参数个数动态化却是非常常见的，例如 `Function.bind(this, [...params])`

```ts
const func = (a: number, b: number, c: number) => {
  return a + b + c
}

const bindFunc = func(null, 1, 2)

const result = bindFunc(3) // result: 6
```

因此，在 `柯里化` 的基础上，我们更需要的是 `动态参数化的柯里化函数`

```ts
const add = (a: number, b: number, c: number) => a + b + c
const three = add(1, 1, 1) 

const curriedAdd = DynamicParamsCurrying(add)
const six = curriedAdd(1, 2, 3)
const seven = curriedAdd(1, 2)(4)
const eight = curriedAdd(2)(3)(4)
```

传递给 `DynamicParamsCurrying` 的函数可能有多个参数，您需要实现它的类型。

在此挑战中，curriedAdd函数每次可接受最少一个参数，但是所有参数个数总和及类型与原函数相同。分配完所有参数后，它应返回其结果。


<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://tsch.js.org/462/answer/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://tsch.js.org/462/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <hr><h3>相关挑战</h3><a href="https://github.com/type-challenges/type-challenges/blob/master/questions/17-hard-currying-1/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-17%E3%83%BB%E6%9F%AF%E9%87%8C%E5%8C%96%201-de3d37" alt="17・柯里化 1"/></a> <!--info-footer-end-->

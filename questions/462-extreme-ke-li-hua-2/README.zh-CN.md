[Currying](https://en.wikipedia.org/wiki/Currying)是一种将带有多个参数的函数转换为每个带有一个参数的函数序列的技术。

但是在前端的日常开发中，科里化函数参数个数动态化却是非常常见的，例如 Function.bind(this, [...params]) API:
```ts
const func = (a: number, b: number, c: number) => {
  return a + b + c
}

const bindFunc = func(null, 1, 2)

const result = bindFunc(3)  // result: 6
```

因此，在`科里化`的基础上，我们更需要的是`动态参数化的科里化函数`

```ts
const add = (a: number, b: number, c: number) => a + b + c
const three = add(1, 1, 1) 

const curriedAdd = DynamicParamsCurrying(add)
const six = curriedAdd(1, 2, 3)
const seven = curriedAdd(1, 2)(4)
const eight = curriedAdd(2)(3)(4)
```
传递给`DynamicParamsCurrying`的函数可能有多个参数，您需要正确键入它。

在此挑战中，curriedAdd函数每次可接受最少一个参数，但是所有参数个数总和及类型与原函数相同。分配完所有参数后，它应返回其结果。

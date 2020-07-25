<!--info-header-start-->
# 获取函数返回类型 <img src="https://img.shields.io/badge/-medium-d8af2c" alt="medium"/>
> by Anthony Fu

<a href="https://type-challenges.netlify.app/case/2/play/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-blue?logo=typescript" alt="接受挑战"/></a> <!--info-header-end-->

不使用 `ReturnType` 实现 TypeScript 的 `ReturnType<T>` 范型。

例如：

```ts
const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
```

<!--info-footer-start-->
<a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://type-challenges.netlify.app/case/2/answers" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E7%AD%94%E6%A1%88-F59BAF?logo=awesome-lists&logoColor=white" alt="查看答案"/></a> 
<!--info-footer-end-->
<!--info-header-start--><h1>Hello World <img src="https://img.shields.io/badge/-%E7%83%AD%E8%BA%AB-teal" alt="热身"/> </h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://type-challenges.netlify.app/13/play/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-3178c6?logo=typescript" alt="接受挑战"/></a>  · <a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><br><!--info-header-end-->

Hello, World!

在 Type Challenges 中，我们使用 TypeScript 自身的类型系统来实现自动判题。 在挑战中，你需要修改下方的代码使得测试通过（即使其没有类型错误）。

```ts
// 期望是一个 string 类型
type HelloWorld = any
```

```ts
// 你需要使得如下这行不会抛出异常
type test = Expect<Equal<HelloWorld, string>>
```

点击上方的 `接受挑战` 开始编码！祝旅途愉快！

<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://type-challenges.netlify.app/13/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <a href="https://type-challenges.netlify.app/13/answer/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-green" alt="分享你的解答"/></a> <!--info-footer-end-->
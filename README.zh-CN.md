<p align='center'>
<img src='./screenshots/logo.svg' width='400'/>
</p>

<p align='center'>
TypeScript 类型体操姿势合集
</p>

<br>
<br>

<p align='center'>
<a href='./README.md'>English</a> | 简体中文
</p>

<br>

## 介绍

<p align='center'>
<del><em>众所周知，TypeScript 拥有一个<a href="https://github.com/microsoft/TypeScript/issues/14833">图灵完备的类型系统</a></em></del>
</p>

高质量的类型可以提高项目的可维护性并避免一些潜在的漏洞。市面上也已经有许多优秀的类型工具库，像是 [ts-toolbelt](https://github.com/millsp/ts-toolbelt), [utility-types](https://github.com/piotrwitek/utility-types), [SimplyTyped](https://github.com/andnp/SimplyTyped) 等等。我们也从这些项目中获取了许多灵感。

本项目意在于让你更好的了解 TS 的类型系统，编写你自己的类型工具，或者只是单纯的享受挑战的了乐趣！我们同时希望可以建立一个社区，在这里你可以提出你在实际环境中遇到的问题，或者帮助他人解答疑惑 - 这些问题也可能被选中成为题库的一部分！

## 题库

> 点击下方徽章查看题目内容

<!--challenges-start-->
<img src="https://img.shields.io/badge/%E7%83%AD%E8%BA%AB-1-teal" alt="1"/><br><a href="./questions/13-warm-hello-world/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-13%E3%83%BBHello%20World-teal" alt="13・Hello World"/></a> <br><br><img src="https://img.shields.io/badge/%E7%AE%80%E5%8D%95-6-90bb12" alt="6"/><br><a href="./questions/4-easy-pick/README.md" target="_blank"><img src="https://img.shields.io/badge/-4%E3%83%BB%E5%AE%9E%E7%8E%B0%20Pick%3CT%2C%20K%3E-90bb12" alt="4・实现 Pick<T, K>"/></a> <a href="./questions/7-easy-readonly/README.md" target="_blank"><img src="https://img.shields.io/badge/-7%E3%83%BB%E5%AE%9E%E7%8E%B0%20Readonly%3CT%3E-90bb12" alt="7・实现 Readonly<T>"/></a> <a href="./questions/11-easy-tuple-to-object/README.md" target="_blank"><img src="https://img.shields.io/badge/-11%E3%83%BB%E5%85%83%E7%BB%84%E8%BD%AC%E6%8D%A2%E4%B8%BA%E5%AF%B9%E8%B1%A1-90bb12" alt="11・元组转换为对象"/></a> <a href="./questions/14-easy-first/README.md" target="_blank"><img src="https://img.shields.io/badge/-14%E3%83%BB%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0-90bb12" alt="14・第一个元素"/></a> <a href="./questions/18-easy-tuple-length/README.md" target="_blank"><img src="https://img.shields.io/badge/-18%E3%83%BB%E8%8E%B7%E5%8F%96%E5%85%83%E7%BB%84%E9%95%BF%E5%BA%A6-90bb12" alt="18・获取元组长度"/></a> <a href="./questions/43-easy-exclude/README.md" target="_blank"><img src="https://img.shields.io/badge/-43%E3%83%BBExclude-90bb12" alt="43・Exclude"/></a> <br><br><img src="https://img.shields.io/badge/%E4%B8%AD%E7%AD%89-10-eaa648" alt="10"/><br><a href="./questions/2-medium-return-type/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-2%E3%83%BB%E8%8E%B7%E5%8F%96%E5%87%BD%E6%95%B0%E8%BF%94%E5%9B%9E%E7%B1%BB%E5%9E%8B-eaa648" alt="2・获取函数返回类型"/></a> <a href="./questions/3-medium-omit/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-3%E3%83%BB%E5%AE%9E%E7%8E%B0%20Omit%3CT%2C%20K%3E-eaa648" alt="3・实现 Omit<T, K>"/></a> <a href="./questions/8-medium-readonly-2/README.md" target="_blank"><img src="https://img.shields.io/badge/-8%E3%83%BBReadonly%202-eaa648" alt="8・Readonly 2"/></a> <a href="./questions/9-medium-deep-readonly/README.md" target="_blank"><img src="https://img.shields.io/badge/-9%E3%83%BB%E6%B7%B1%E5%BA%A6%20Readonly-eaa648" alt="9・深度 Readonly"/></a> <a href="./questions/10-medium-tuple-to-union/README.md" target="_blank"><img src="https://img.shields.io/badge/-10%E3%83%BB%E5%85%83%E7%BB%84%E8%BD%AC%E5%90%88%E9%9B%86-eaa648" alt="10・元组转合集"/></a> <a href="./questions/12-medium-chainable-options/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-12%E3%83%BB%E5%8F%AF%E4%B8%B2%E8%81%94%E6%9E%84%E9%80%A0%E5%99%A8-eaa648" alt="12・可串联构造器"/></a> <a href="./questions/15-medium-last/README.md" target="_blank"><img src="https://img.shields.io/badge/-15%E3%83%BB%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0-eaa648" alt="15・最后一个元素"/></a> <a href="./questions/16-medium-pop/README.md" target="_blank"><img src="https://img.shields.io/badge/-16%E3%83%BB%E5%87%BA%E5%A0%86-eaa648" alt="16・出堆"/></a> <a href="./questions/20-medium-promise-all/README.md" target="_blank"><img src="https://img.shields.io/badge/-20%E3%83%BBPromise.all-eaa648" alt="20・Promise.all"/></a> <a href="./questions/62-medium-type-lookup/README.md" target="_blank"><img src="https://img.shields.io/badge/-62%E3%83%BBType%20Lookup-eaa648" alt="62・Type Lookup"/></a> <br><br><img src="https://img.shields.io/badge/%E5%9B%B0%E9%9A%BE-7-red" alt="7"/><br><a href="./questions/6-hard-simple-vue/README.md" target="_blank"><img src="https://img.shields.io/badge/-6%E3%83%BB%E7%AE%80%E5%8D%95%E7%9A%84%20Vue%20%E7%B1%BB%E5%9E%8B-red" alt="6・简单的 Vue 类型"/></a> <a href="./questions/17-hard-currying-1/README.md" target="_blank"><img src="https://img.shields.io/badge/-17%E3%83%BB%E7%A7%91%E9%87%8C%E5%8C%96%201-red" alt="17・科里化 1"/></a> <a href="./questions/55-hard-union-to-intersection/README.md" target="_blank"><img src="https://img.shields.io/badge/-55%E3%83%BBUnion%20to%20Intersection-red" alt="55・Union to Intersection"/></a> <a href="./questions/57-hard-get-required/README.md" target="_blank"><img src="https://img.shields.io/badge/-57%E3%83%BBGet%20Required-red" alt="57・Get Required"/></a> <a href="./questions/59-hard-get-optional/README.md" target="_blank"><img src="https://img.shields.io/badge/-59%E3%83%BBGet%20Optional-red" alt="59・Get Optional"/></a> <a href="./questions/89-hard-required-keys/README.md" target="_blank"><img src="https://img.shields.io/badge/-89%E3%83%BBRequired%20Keys-red" alt="89・Required Keys"/></a> <a href="./questions/90-hard-optional-keys/README.md" target="_blank"><img src="https://img.shields.io/badge/-90%E3%83%BBOptional%20Keys-red" alt="90・Optional Keys"/></a> <br><br><img src="https://img.shields.io/badge/%E5%9C%B0%E7%8B%B1-1-b11b8d" alt="1"/><br><a href="./questions/5-extreme-readonly-keys/README.md" target="_blank"><img src="https://img.shields.io/badge/-5%E3%83%BB%E8%8E%B7%E5%8F%96%E5%8F%AA%E8%AF%BB%E5%AD%97%E6%AE%B5-b11b8d" alt="5・获取只读字段"/></a> <br><details><summary>By Tags</summary><br><table><tbody><tr><td><img src="https://img.shields.io/badge/-%234.0-999" alt="#4.0"/></td><td><a href="./questions/14-easy-first/README.md" target="_blank"><img src="https://img.shields.io/badge/-14%E3%83%BB%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0-90bb12" alt="14・第一个元素"/></a> <a href="./questions/15-medium-last/README.md" target="_blank"><img src="https://img.shields.io/badge/-15%E3%83%BB%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0-eaa648" alt="15・最后一个元素"/></a> <a href="./questions/16-medium-pop/README.md" target="_blank"><img src="https://img.shields.io/badge/-16%E3%83%BB%E5%87%BA%E5%A0%86-eaa648" alt="16・出堆"/></a> <a href="./questions/17-hard-currying-1/README.md" target="_blank"><img src="https://img.shields.io/badge/-17%E3%83%BB%E7%A7%91%E9%87%8C%E5%8C%96%201-red" alt="17・科里化 1"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23application-999" alt="#application"/></td><td><a href="./questions/12-medium-chainable-options/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-12%E3%83%BB%E5%8F%AF%E4%B8%B2%E8%81%94%E6%9E%84%E9%80%A0%E5%99%A8-eaa648" alt="12・可串联构造器"/></a> <a href="./questions/6-hard-simple-vue/README.md" target="_blank"><img src="https://img.shields.io/badge/-6%E3%83%BB%E7%AE%80%E5%8D%95%E7%9A%84%20Vue%20%E7%B1%BB%E5%9E%8B-red" alt="6・简单的 Vue 类型"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></td><td><a href="./questions/14-easy-first/README.md" target="_blank"><img src="https://img.shields.io/badge/-14%E3%83%BB%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0-90bb12" alt="14・第一个元素"/></a> <a href="./questions/15-medium-last/README.md" target="_blank"><img src="https://img.shields.io/badge/-15%E3%83%BB%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0-eaa648" alt="15・最后一个元素"/></a> <a href="./questions/16-medium-pop/README.md" target="_blank"><img src="https://img.shields.io/badge/-16%E3%83%BB%E5%87%BA%E5%A0%86-eaa648" alt="16・出堆"/></a> <a href="./questions/20-medium-promise-all/README.md" target="_blank"><img src="https://img.shields.io/badge/-20%E3%83%BBPromise.all-eaa648" alt="20・Promise.all"/></a> <a href="./questions/17-hard-currying-1/README.md" target="_blank"><img src="https://img.shields.io/badge/-17%E3%83%BB%E7%A7%91%E9%87%8C%E5%8C%96%201-red" alt="17・科里化 1"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23built--in-999" alt="#built-in"/></td><td><a href="./questions/4-easy-pick/README.md" target="_blank"><img src="https://img.shields.io/badge/-4%E3%83%BB%E5%AE%9E%E7%8E%B0%20Pick%3CT%2C%20K%3E-90bb12" alt="4・实现 Pick<T, K>"/></a> <a href="./questions/7-easy-readonly/README.md" target="_blank"><img src="https://img.shields.io/badge/-7%E3%83%BB%E5%AE%9E%E7%8E%B0%20Readonly%3CT%3E-90bb12" alt="7・实现 Readonly<T>"/></a> <a href="./questions/43-easy-exclude/README.md" target="_blank"><img src="https://img.shields.io/badge/-43%E3%83%BBExclude-90bb12" alt="43・Exclude"/></a> <a href="./questions/2-medium-return-type/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-2%E3%83%BB%E8%8E%B7%E5%8F%96%E5%87%BD%E6%95%B0%E8%BF%94%E5%9B%9E%E7%B1%BB%E5%9E%8B-eaa648" alt="2・获取函数返回类型"/></a> <a href="./questions/3-medium-omit/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-3%E3%83%BB%E5%AE%9E%E7%8E%B0%20Omit%3CT%2C%20K%3E-eaa648" alt="3・实现 Omit<T, K>"/></a> <a href="./questions/20-medium-promise-all/README.md" target="_blank"><img src="https://img.shields.io/badge/-20%E3%83%BBPromise.all-eaa648" alt="20・Promise.all"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23deep-999" alt="#deep"/></td><td><a href="./questions/9-medium-deep-readonly/README.md" target="_blank"><img src="https://img.shields.io/badge/-9%E3%83%BB%E6%B7%B1%E5%BA%A6%20Readonly-eaa648" alt="9・深度 Readonly"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23infer-999" alt="#infer"/></td><td><a href="./questions/2-medium-return-type/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-2%E3%83%BB%E8%8E%B7%E5%8F%96%E5%87%BD%E6%95%B0%E8%BF%94%E5%9B%9E%E7%B1%BB%E5%9E%8B-eaa648" alt="2・获取函数返回类型"/></a> <a href="./questions/10-medium-tuple-to-union/README.md" target="_blank"><img src="https://img.shields.io/badge/-10%E3%83%BB%E5%85%83%E7%BB%84%E8%BD%AC%E5%90%88%E9%9B%86-eaa648" alt="10・元组转合集"/></a> <a href="./questions/55-hard-union-to-intersection/README.md" target="_blank"><img src="https://img.shields.io/badge/-55%E3%83%BBUnion%20to%20Intersection-red" alt="55・Union to Intersection"/></a> <a href="./questions/57-hard-get-required/README.md" target="_blank"><img src="https://img.shields.io/badge/-57%E3%83%BBGet%20Required-red" alt="57・Get Required"/></a> <a href="./questions/59-hard-get-optional/README.md" target="_blank"><img src="https://img.shields.io/badge/-59%E3%83%BBGet%20Optional-red" alt="59・Get Optional"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23map-999" alt="#map"/></td><td><a href="./questions/62-medium-type-lookup/README.md" target="_blank"><img src="https://img.shields.io/badge/-62%E3%83%BBType%20Lookup-eaa648" alt="62・Type Lookup"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23object--keys-999" alt="#object-keys"/></td><td><a href="./questions/7-easy-readonly/README.md" target="_blank"><img src="https://img.shields.io/badge/-7%E3%83%BB%E5%AE%9E%E7%8E%B0%20Readonly%3CT%3E-90bb12" alt="7・实现 Readonly<T>"/></a> <a href="./questions/8-medium-readonly-2/README.md" target="_blank"><img src="https://img.shields.io/badge/-8%E3%83%BBReadonly%202-eaa648" alt="8・Readonly 2"/></a> <a href="./questions/9-medium-deep-readonly/README.md" target="_blank"><img src="https://img.shields.io/badge/-9%E3%83%BB%E6%B7%B1%E5%BA%A6%20Readonly-eaa648" alt="9・深度 Readonly"/></a> <a href="./questions/5-extreme-readonly-keys/README.md" target="_blank"><img src="https://img.shields.io/badge/-5%E3%83%BB%E8%8E%B7%E5%8F%96%E5%8F%AA%E8%AF%BB%E5%AD%97%E6%AE%B5-b11b8d" alt="5・获取只读字段"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23readonly-999" alt="#readonly"/></td><td><a href="./questions/7-easy-readonly/README.md" target="_blank"><img src="https://img.shields.io/badge/-7%E3%83%BB%E5%AE%9E%E7%8E%B0%20Readonly%3CT%3E-90bb12" alt="7・实现 Readonly<T>"/></a> <a href="./questions/8-medium-readonly-2/README.md" target="_blank"><img src="https://img.shields.io/badge/-8%E3%83%BBReadonly%202-eaa648" alt="8・Readonly 2"/></a> <a href="./questions/9-medium-deep-readonly/README.md" target="_blank"><img src="https://img.shields.io/badge/-9%E3%83%BB%E6%B7%B1%E5%BA%A6%20Readonly-eaa648" alt="9・深度 Readonly"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23this-999" alt="#this"/></td><td><a href="./questions/6-hard-simple-vue/README.md" target="_blank"><img src="https://img.shields.io/badge/-6%E3%83%BB%E7%AE%80%E5%8D%95%E7%9A%84%20Vue%20%E7%B1%BB%E5%9E%8B-red" alt="6・简单的 Vue 类型"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/></td><td><a href="./questions/18-easy-tuple-length/README.md" target="_blank"><img src="https://img.shields.io/badge/-18%E3%83%BB%E8%8E%B7%E5%8F%96%E5%85%83%E7%BB%84%E9%95%BF%E5%BA%A6-90bb12" alt="18・获取元组长度"/></a> <a href="./questions/10-medium-tuple-to-union/README.md" target="_blank"><img src="https://img.shields.io/badge/-10%E3%83%BB%E5%85%83%E7%BB%84%E8%BD%AC%E5%90%88%E9%9B%86-eaa648" alt="10・元组转合集"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23union-999" alt="#union"/></td><td><a href="./questions/4-easy-pick/README.md" target="_blank"><img src="https://img.shields.io/badge/-4%E3%83%BB%E5%AE%9E%E7%8E%B0%20Pick%3CT%2C%20K%3E-90bb12" alt="4・实现 Pick<T, K>"/></a> <a href="./questions/3-medium-omit/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-3%E3%83%BB%E5%AE%9E%E7%8E%B0%20Omit%3CT%2C%20K%3E-eaa648" alt="3・实现 Omit<T, K>"/></a> <a href="./questions/10-medium-tuple-to-union/README.md" target="_blank"><img src="https://img.shields.io/badge/-10%E3%83%BB%E5%85%83%E7%BB%84%E8%BD%AC%E5%90%88%E9%9B%86-eaa648" alt="10・元组转合集"/></a> <a href="./questions/62-medium-type-lookup/README.md" target="_blank"><img src="https://img.shields.io/badge/-62%E3%83%BBType%20Lookup-eaa648" alt="62・Type Lookup"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/></td><td><a href="./questions/55-hard-union-to-intersection/README.md" target="_blank"><img src="https://img.shields.io/badge/-55%E3%83%BBUnion%20to%20Intersection-red" alt="55・Union to Intersection"/></a> <a href="./questions/57-hard-get-required/README.md" target="_blank"><img src="https://img.shields.io/badge/-57%E3%83%BBGet%20Required-red" alt="57・Get Required"/></a> <a href="./questions/59-hard-get-optional/README.md" target="_blank"><img src="https://img.shields.io/badge/-59%E3%83%BBGet%20Optional-red" alt="59・Get Optional"/></a> <a href="./questions/89-hard-required-keys/README.md" target="_blank"><img src="https://img.shields.io/badge/-89%E3%83%BBRequired%20Keys-red" alt="89・Required Keys"/></a> <a href="./questions/90-hard-optional-keys/README.md" target="_blank"><img src="https://img.shields.io/badge/-90%E3%83%BBOptional%20Keys-red" alt="90・Optional Keys"/></a> <a href="./questions/5-extreme-readonly-keys/README.md" target="_blank"><img src="https://img.shields.io/badge/-5%E3%83%BB%E8%8E%B7%E5%8F%96%E5%8F%AA%E8%AF%BB%E5%AD%97%E6%AE%B5-b11b8d" alt="5・获取只读字段"/></a> </td></tr></tbody></table></details>
<!--challenges-end-->

## 推荐读物

### 官方资源

- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
  - [Unions and Intersection Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html)
  - [Literal Types](https://www.typescriptlang.org/docs/handbook/literal-types.html)
  - [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
  - [Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

### 知乎专栏

- [来玩TypeScript啊，机都给你开好了！](https://zhuanlan.zhihu.com/c_206498766)

### 文章

> TODO

## 参与贡献

你可以通过如下几种方式参与贡献这个项目

- 分享你的答案或解题思路
- 提案加入新的题目
- 完善已有题目的测试用例
- 提供针对题目的学习资料或方法
- 分享你在真实项目中遇到的类型问题（无论你找到答案与否）- 大家会一起帮你找到解决的思路
- 通过在 Issue 下留言帮助他人

[开一个新的 Issue](https://github.com/type-challenges/type-challenges/issues/new/choose) 并选择相应的模板即可，感谢参与！

> 💡 尽管你可以使用中文进行讨论，我们还是鼓励你尝试使用英文发起 Issue 与评论，这样可以让你的问题被更多人看到也可以帮助更多人。

## 感谢

该项目启发于

- [piotrwitek/utility-types](https://github.com/piotrwitek/utility-types)
- [wixplosives/typescript-type-utils](https://github.com/wixplosives/typescript-type-utils)
- [psmyrdek/typescript-challenges](https://github.com/psmyrdek/typescript-challenges)
- [andnp/SimplyTyped](https://github.com/andnp/SimplyTyped)

参与贡献者

> TODO


## License

MIT

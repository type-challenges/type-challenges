<p align='center'>
<img src='./screenshots/logo.svg' width='400'/>
</p>

<p align='center'>
Collection of TypeScript type challenges
</p>

<br>
<br>

<p align='center'>
English | <a href='./README.zh-CN.md'>简体中文</a>
</p>


## Intro

<p align='center'>
<del><em>by the power of TypeScript's well-known <a href="https://github.com/microsoft/TypeScript/issues/14833">Turing Completed</a> type system</em></del>
</p>

High quality types can help improving projects' maintainability while avoiding potential bugs. 

There are a bunch of awesome type utilities libraries may boosting your works on types, like [ts-toolbelt](https://github.com/millsp/ts-toolbelt), [utility-types](https://github.com/piotrwitek/utility-types), [SimplyTyped](https://github.com/andnp/SimplyTyped), etc, which you can already use.

This project is aim to help you better understand how the type system works, writing your own utilities, or just having fun with the challenges. We are also trying to form a community that you can ask questions and get answers you have faced in realworld - they may become part the challenges!

## Challenges

> Click the following badges to see detail of the challenges.

<!--challenges-start-->
<img src="https://img.shields.io/badge/warm--up-1-teal" alt="1"/><br><a href="./questions/13-warm-hello-world/README.md" target="_blank"><img src="https://img.shields.io/badge/-13%E3%83%BBHello%20World-teal" alt="13・Hello World"/></a> <br><br><img src="https://img.shields.io/badge/easy-6-90bb12" alt="6"/><br><a href="./questions/4-easy-pick/README.md" target="_blank"><img src="https://img.shields.io/badge/-4%E3%83%BBPick%3CT%2C%20K%3E-90bb12" alt="4・Pick<T, K>"/></a> <a href="./questions/7-easy-readonly/README.md" target="_blank"><img src="https://img.shields.io/badge/-7%E3%83%BBReadonly%3CT%3E-90bb12" alt="7・Readonly<T>"/></a> <a href="./questions/11-easy-tuple-to-object/README.md" target="_blank"><img src="https://img.shields.io/badge/-11%E3%83%BBTuple%20to%20Object-90bb12" alt="11・Tuple to Object"/></a> <a href="./questions/14-easy-first/README.md" target="_blank"><img src="https://img.shields.io/badge/-14%E3%83%BBFirst%20of%20Array-90bb12" alt="14・First of Array"/></a> <a href="./questions/18-easy-tuple-length/README.md" target="_blank"><img src="https://img.shields.io/badge/-18%E3%83%BBLength%20of%20Tuple-90bb12" alt="18・Length of Tuple"/></a> <a href="./questions/43-easy-exclude/README.md" target="_blank"><img src="https://img.shields.io/badge/-43%E3%83%BBExclude-90bb12" alt="43・Exclude"/></a> <br><br><img src="https://img.shields.io/badge/medium-10-eaa648" alt="10"/><br><a href="./questions/2-medium-return-type/README.md" target="_blank"><img src="https://img.shields.io/badge/-2%E3%83%BBGet%20Return%20Type-eaa648" alt="2・Get Return Type"/></a> <a href="./questions/3-medium-omit/README.md" target="_blank"><img src="https://img.shields.io/badge/-3%E3%83%BBOmit%3CT%2C%20K%3E-eaa648" alt="3・Omit<T, K>"/></a> <a href="./questions/8-medium-readonly-2/README.md" target="_blank"><img src="https://img.shields.io/badge/-8%E3%83%BBReadonly%202-eaa648" alt="8・Readonly 2"/></a> <a href="./questions/9-medium-deep-readonly/README.md" target="_blank"><img src="https://img.shields.io/badge/-9%E3%83%BBDeep%20Readonly-eaa648" alt="9・Deep Readonly"/></a> <a href="./questions/10-medium-tuple-to-union/README.md" target="_blank"><img src="https://img.shields.io/badge/-10%E3%83%BBTuple%20to%20Union-eaa648" alt="10・Tuple to Union"/></a> <a href="./questions/12-medium-chainable-options/README.md" target="_blank"><img src="https://img.shields.io/badge/-12%E3%83%BBChainable%20Options-eaa648" alt="12・Chainable Options"/></a> <a href="./questions/15-medium-last/README.md" target="_blank"><img src="https://img.shields.io/badge/-15%E3%83%BBLast%20of%20Array-eaa648" alt="15・Last of Array"/></a> <a href="./questions/16-medium-pop/README.md" target="_blank"><img src="https://img.shields.io/badge/-16%E3%83%BBPop-eaa648" alt="16・Pop"/></a> <a href="./questions/20-medium-promise-all/README.md" target="_blank"><img src="https://img.shields.io/badge/-20%E3%83%BBPromise.all-eaa648" alt="20・Promise.all"/></a> <a href="./questions/62-medium-type-lookup/README.md" target="_blank"><img src="https://img.shields.io/badge/-62%E3%83%BBType%20Lookup-eaa648" alt="62・Type Lookup"/></a> <br><br><img src="https://img.shields.io/badge/hard-7-red" alt="7"/><br><a href="./questions/6-hard-simple-vue/README.md" target="_blank"><img src="https://img.shields.io/badge/-6%E3%83%BBSimple%20Vue-red" alt="6・Simple Vue"/></a> <a href="./questions/17-hard-currying-1/README.md" target="_blank"><img src="https://img.shields.io/badge/-17%E3%83%BBCurrying%201-red" alt="17・Currying 1"/></a> <a href="./questions/55-hard-union-to-intersection/README.md" target="_blank"><img src="https://img.shields.io/badge/-55%E3%83%BBUnion%20to%20Intersection-red" alt="55・Union to Intersection"/></a> <a href="./questions/57-hard-get-required/README.md" target="_blank"><img src="https://img.shields.io/badge/-57%E3%83%BBGet%20Required-red" alt="57・Get Required"/></a> <a href="./questions/59-hard-get-optional/README.md" target="_blank"><img src="https://img.shields.io/badge/-59%E3%83%BBGet%20Optional-red" alt="59・Get Optional"/></a> <a href="./questions/89-hard-required-keys/README.md" target="_blank"><img src="https://img.shields.io/badge/-89%E3%83%BBRequired%20Keys-red" alt="89・Required Keys"/></a> <a href="./questions/90-hard-optional-keys/README.md" target="_blank"><img src="https://img.shields.io/badge/-90%E3%83%BBOptional%20Keys-red" alt="90・Optional Keys"/></a> <br><br><img src="https://img.shields.io/badge/extreme-1-b11b8d" alt="1"/><br><a href="./questions/5-extreme-readonly-keys/README.md" target="_blank"><img src="https://img.shields.io/badge/-5%E3%83%BBGet%20Readonly%20Keys-b11b8d" alt="5・Get Readonly Keys"/></a> <br><details><summary>By Tags</summary><br><table><tbody><tr><td><img src="https://img.shields.io/badge/-%234.0-999" alt="#4.0"/></td><td><a href="./questions/14-easy-first/README.md" target="_blank"><img src="https://img.shields.io/badge/-14%E3%83%BBFirst%20of%20Array-90bb12" alt="14・First of Array"/></a> <a href="./questions/15-medium-last/README.md" target="_blank"><img src="https://img.shields.io/badge/-15%E3%83%BBLast%20of%20Array-eaa648" alt="15・Last of Array"/></a> <a href="./questions/16-medium-pop/README.md" target="_blank"><img src="https://img.shields.io/badge/-16%E3%83%BBPop-eaa648" alt="16・Pop"/></a> <a href="./questions/17-hard-currying-1/README.md" target="_blank"><img src="https://img.shields.io/badge/-17%E3%83%BBCurrying%201-red" alt="17・Currying 1"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23application-999" alt="#application"/></td><td><a href="./questions/12-medium-chainable-options/README.md" target="_blank"><img src="https://img.shields.io/badge/-12%E3%83%BBChainable%20Options-eaa648" alt="12・Chainable Options"/></a> <a href="./questions/6-hard-simple-vue/README.md" target="_blank"><img src="https://img.shields.io/badge/-6%E3%83%BBSimple%20Vue-red" alt="6・Simple Vue"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></td><td><a href="./questions/14-easy-first/README.md" target="_blank"><img src="https://img.shields.io/badge/-14%E3%83%BBFirst%20of%20Array-90bb12" alt="14・First of Array"/></a> <a href="./questions/15-medium-last/README.md" target="_blank"><img src="https://img.shields.io/badge/-15%E3%83%BBLast%20of%20Array-eaa648" alt="15・Last of Array"/></a> <a href="./questions/16-medium-pop/README.md" target="_blank"><img src="https://img.shields.io/badge/-16%E3%83%BBPop-eaa648" alt="16・Pop"/></a> <a href="./questions/20-medium-promise-all/README.md" target="_blank"><img src="https://img.shields.io/badge/-20%E3%83%BBPromise.all-eaa648" alt="20・Promise.all"/></a> <a href="./questions/17-hard-currying-1/README.md" target="_blank"><img src="https://img.shields.io/badge/-17%E3%83%BBCurrying%201-red" alt="17・Currying 1"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23built--in-999" alt="#built-in"/></td><td><a href="./questions/4-easy-pick/README.md" target="_blank"><img src="https://img.shields.io/badge/-4%E3%83%BBPick%3CT%2C%20K%3E-90bb12" alt="4・Pick<T, K>"/></a> <a href="./questions/7-easy-readonly/README.md" target="_blank"><img src="https://img.shields.io/badge/-7%E3%83%BBReadonly%3CT%3E-90bb12" alt="7・Readonly<T>"/></a> <a href="./questions/43-easy-exclude/README.md" target="_blank"><img src="https://img.shields.io/badge/-43%E3%83%BBExclude-90bb12" alt="43・Exclude"/></a> <a href="./questions/2-medium-return-type/README.md" target="_blank"><img src="https://img.shields.io/badge/-2%E3%83%BBGet%20Return%20Type-eaa648" alt="2・Get Return Type"/></a> <a href="./questions/3-medium-omit/README.md" target="_blank"><img src="https://img.shields.io/badge/-3%E3%83%BBOmit%3CT%2C%20K%3E-eaa648" alt="3・Omit<T, K>"/></a> <a href="./questions/20-medium-promise-all/README.md" target="_blank"><img src="https://img.shields.io/badge/-20%E3%83%BBPromise.all-eaa648" alt="20・Promise.all"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23deep-999" alt="#deep"/></td><td><a href="./questions/9-medium-deep-readonly/README.md" target="_blank"><img src="https://img.shields.io/badge/-9%E3%83%BBDeep%20Readonly-eaa648" alt="9・Deep Readonly"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23infer-999" alt="#infer"/></td><td><a href="./questions/2-medium-return-type/README.md" target="_blank"><img src="https://img.shields.io/badge/-2%E3%83%BBGet%20Return%20Type-eaa648" alt="2・Get Return Type"/></a> <a href="./questions/10-medium-tuple-to-union/README.md" target="_blank"><img src="https://img.shields.io/badge/-10%E3%83%BBTuple%20to%20Union-eaa648" alt="10・Tuple to Union"/></a> <a href="./questions/55-hard-union-to-intersection/README.md" target="_blank"><img src="https://img.shields.io/badge/-55%E3%83%BBUnion%20to%20Intersection-red" alt="55・Union to Intersection"/></a> <a href="./questions/57-hard-get-required/README.md" target="_blank"><img src="https://img.shields.io/badge/-57%E3%83%BBGet%20Required-red" alt="57・Get Required"/></a> <a href="./questions/59-hard-get-optional/README.md" target="_blank"><img src="https://img.shields.io/badge/-59%E3%83%BBGet%20Optional-red" alt="59・Get Optional"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23map-999" alt="#map"/></td><td><a href="./questions/62-medium-type-lookup/README.md" target="_blank"><img src="https://img.shields.io/badge/-62%E3%83%BBType%20Lookup-eaa648" alt="62・Type Lookup"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23object--keys-999" alt="#object-keys"/></td><td><a href="./questions/7-easy-readonly/README.md" target="_blank"><img src="https://img.shields.io/badge/-7%E3%83%BBReadonly%3CT%3E-90bb12" alt="7・Readonly<T>"/></a> <a href="./questions/8-medium-readonly-2/README.md" target="_blank"><img src="https://img.shields.io/badge/-8%E3%83%BBReadonly%202-eaa648" alt="8・Readonly 2"/></a> <a href="./questions/9-medium-deep-readonly/README.md" target="_blank"><img src="https://img.shields.io/badge/-9%E3%83%BBDeep%20Readonly-eaa648" alt="9・Deep Readonly"/></a> <a href="./questions/5-extreme-readonly-keys/README.md" target="_blank"><img src="https://img.shields.io/badge/-5%E3%83%BBGet%20Readonly%20Keys-b11b8d" alt="5・Get Readonly Keys"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23readonly-999" alt="#readonly"/></td><td><a href="./questions/7-easy-readonly/README.md" target="_blank"><img src="https://img.shields.io/badge/-7%E3%83%BBReadonly%3CT%3E-90bb12" alt="7・Readonly<T>"/></a> <a href="./questions/8-medium-readonly-2/README.md" target="_blank"><img src="https://img.shields.io/badge/-8%E3%83%BBReadonly%202-eaa648" alt="8・Readonly 2"/></a> <a href="./questions/9-medium-deep-readonly/README.md" target="_blank"><img src="https://img.shields.io/badge/-9%E3%83%BBDeep%20Readonly-eaa648" alt="9・Deep Readonly"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23this-999" alt="#this"/></td><td><a href="./questions/6-hard-simple-vue/README.md" target="_blank"><img src="https://img.shields.io/badge/-6%E3%83%BBSimple%20Vue-red" alt="6・Simple Vue"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/></td><td><a href="./questions/18-easy-tuple-length/README.md" target="_blank"><img src="https://img.shields.io/badge/-18%E3%83%BBLength%20of%20Tuple-90bb12" alt="18・Length of Tuple"/></a> <a href="./questions/10-medium-tuple-to-union/README.md" target="_blank"><img src="https://img.shields.io/badge/-10%E3%83%BBTuple%20to%20Union-eaa648" alt="10・Tuple to Union"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23union-999" alt="#union"/></td><td><a href="./questions/4-easy-pick/README.md" target="_blank"><img src="https://img.shields.io/badge/-4%E3%83%BBPick%3CT%2C%20K%3E-90bb12" alt="4・Pick<T, K>"/></a> <a href="./questions/3-medium-omit/README.md" target="_blank"><img src="https://img.shields.io/badge/-3%E3%83%BBOmit%3CT%2C%20K%3E-eaa648" alt="3・Omit<T, K>"/></a> <a href="./questions/10-medium-tuple-to-union/README.md" target="_blank"><img src="https://img.shields.io/badge/-10%E3%83%BBTuple%20to%20Union-eaa648" alt="10・Tuple to Union"/></a> <a href="./questions/62-medium-type-lookup/README.md" target="_blank"><img src="https://img.shields.io/badge/-62%E3%83%BBType%20Lookup-eaa648" alt="62・Type Lookup"/></a> </td></tr><tr><td><img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/></td><td><a href="./questions/55-hard-union-to-intersection/README.md" target="_blank"><img src="https://img.shields.io/badge/-55%E3%83%BBUnion%20to%20Intersection-red" alt="55・Union to Intersection"/></a> <a href="./questions/57-hard-get-required/README.md" target="_blank"><img src="https://img.shields.io/badge/-57%E3%83%BBGet%20Required-red" alt="57・Get Required"/></a> <a href="./questions/59-hard-get-optional/README.md" target="_blank"><img src="https://img.shields.io/badge/-59%E3%83%BBGet%20Optional-red" alt="59・Get Optional"/></a> <a href="./questions/89-hard-required-keys/README.md" target="_blank"><img src="https://img.shields.io/badge/-89%E3%83%BBRequired%20Keys-red" alt="89・Required Keys"/></a> <a href="./questions/90-hard-optional-keys/README.md" target="_blank"><img src="https://img.shields.io/badge/-90%E3%83%BBOptional%20Keys-red" alt="90・Optional Keys"/></a> <a href="./questions/5-extreme-readonly-keys/README.md" target="_blank"><img src="https://img.shields.io/badge/-5%E3%83%BBGet%20Readonly%20Keys-b11b8d" alt="5・Get Readonly Keys"/></a> </td></tr></tbody></table></details>
<!--challenges-end-->

## Recommended Readings

### Official

- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
  - [Unions and Intersection Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html)
  - [Literal Types](https://www.typescriptlang.org/docs/handbook/literal-types.html)
  - [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
  - [Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

- [The New Handbook](https://github.com/microsoft/TypeScript-New-Handbook)

### Articles

- [Learn Advanced TypeScript Types](https://medium.com/free-code-camp/typescript-curry-ramda-types-f747e99744ab)

### Projects

- [Type Gymnastics](https://github.com/g-plane/type-gymnastics)

> TODO

## How to Contribute

There are several ways you can contribute to this project

- Share your answers / solutions
- Propose new challenges
- Add more test cases to the existing challenges
- Provide learning resources or ideas of how to solve challenges
- Share the problems you have faced in realworld projects, regardless you having the solution or not - the community would help you as well.
- Help with others by discussion in issues
- Contribute the infra of this project [TODOs.md](./TODOs.md)

Just [open an issue](https://github.com/type-challenges/type-challenges/issues/new/choose) and choose the cosponsing template. Thanks!

## Thanks

This project was born from solving realworld types problem with [@hardfist](https://github.com/hardfist) and [@MeCKodo](https://github.com/MeCKodo). And great thanks to [@sinoon](https://github.com/sinoon) who contributed a lot while giving early feedback on this project.

### Inspired by

- [piotrwitek/utility-types](https://github.com/piotrwitek/utility-types)
- [psmyrdek/typescript-challenges](https://github.com/psmyrdek/typescript-challenges)
- [andnp/SimplyTyped](https://github.com/andnp/SimplyTyped)

### Contributors

> TODO


## License

MIT

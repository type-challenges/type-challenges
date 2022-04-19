<!--info-header-start--><h1>Vue Basic Props <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23vue-999" alt="#vue"/> <img src="https://img.shields.io/badge/-%23application-999" alt="#application"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/213/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

**This challenge continues from [6 - Simple Vue](//tsch.js.org/6), you should finish that one first, and modify your code based on it to start this challenge**.

In addition to the Simple Vue, we are now having a new `props` field in the options. This is a simplified version of Vue's `props` option. Here are some of the rules.

`props` is an object containing each field as the key of the real props injected into `this`. The injected props will be accessible in all the context including `data`, `computed`, and `methods`.

A prop will be defined either by a constructor or an object with a `type` field containing constructor(s).

For example

```js
props: {
  foo: Boolean
}
// or
props: {
  foo: { type: Boolean }
}
```

should be inferred to `type Props = { foo: boolean }`.

When passing multiple constructors, the type should be inferred to a union.

```ts
props: {
  foo: { type: [Boolean, Number, String] }
}
// -->
type Props = { foo: boolean | number | string }
```

When an empty object is passed, the key should be inferred to `any`.

For more specified cases, check out the Test Cases section.

> `required`, `default`, and array props in Vue are not considered in this challenge.


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/213/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/213/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <hr><h3>Related Challenges</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00006-hard-simple-vue/README.md" target="_blank"><img src="https://img.shields.io/badge/-6%E3%83%BBSimple%20Vue-de3d37" alt="6・Simple Vue"/></a> <!--info-footer-end-->

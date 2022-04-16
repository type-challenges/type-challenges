<!--info-header-start--><h1>排列组合 <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/> <img src="https://img.shields.io/badge/-%23string-999" alt="#string"/> <img src="https://img.shields.io/badge/-%23application-999" alt="#application"/></h1><blockquote><p>by Homyee King <a href="https://github.com/HomyeeKing" target="_blank">@HomyeeKing</a></p></blockquote><p><a href="https://tsch.js.org/20/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->

给出一个字符串数组，然后排列组合里面的元素。
适用于一些组件的属性，比如video的[controlsList](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList)

```ts
// expected to be `"foo" | "bar" | "baz" | "foo bar baz" | "bar foo" | "baz foo" | "bar baz" | "baz bar"`
type Keys = Permutate<['foo', 'bar', 'baz']>
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/30/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/30/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->

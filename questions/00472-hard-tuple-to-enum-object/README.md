<!--info-header-start--><h1>Tuple to Enum Object <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><blockquote><p>by Ryo Hanafusa <a href="https://github.com/softoika" target="_blank">@softoika</a></p></blockquote><p><a href="https://tsch.js.org/472/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

The enum is an original syntax of TypeScript (it does not exist in JavaScript). So it is converted to like the following form as a result of transpilation:
```js
let OperatingSystem;
(function (OperatingSystem) {
    OperatingSystem[OperatingSystem["MacOS"] = 0] = "MacOS";
    OperatingSystem[OperatingSystem["Windows"] = 1] = "Windows";
    OperatingSystem[OperatingSystem["Linux"] = 2] = "Linux";
})(OperatingSystem || (OperatingSystem = {}));
```
In this question, the type should convert a given string tuple to an object that behaves like an enum.
Moreover, the property of an enum is preferably a pascal case.
```ts
Enum<["macOS", "Windows", "Linux"]>
// -> { readonly MacOS: "macOS", readonly Windows: "Windows", readonly Linux: "Linux" }
```
If `true` is given in the second argument, the value should be a number literal.
```ts
Enum<["macOS", "Windows", "Linux"], true>
// -> { readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/472/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/472/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <hr><h3>Related Challenges</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.md" target="_blank"><img src="https://img.shields.io/badge/-10%E3%83%BBTuple%20to%20Union-d9901a" alt="10・Tuple to Union"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md" target="_blank"><img src="https://img.shields.io/badge/-11%E3%83%BBTuple%20to%20Object-7aad0c" alt="11・Tuple to Object"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00730-hard-union-to-tuple/README.md" target="_blank"><img src="https://img.shields.io/badge/-730%E3%83%BBUnion%20to%20Tuple-de3d37" alt="730・Union to Tuple"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/03188-medium-tuple-to-nested-object/README.md" target="_blank"><img src="https://img.shields.io/badge/-3188%E3%83%BBTuple%20to%20Nested%20Object-d9901a" alt="3188・Tuple to Nested Object"/></a> <!--info-footer-end-->

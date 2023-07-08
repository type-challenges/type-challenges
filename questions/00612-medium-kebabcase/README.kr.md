<!--info-header-start--><h1>KebabCase <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><blockquote><p>by Johnson Chu <a href="https://github.com/johnsoncodehk" target="_blank">@johnsoncodehk</a></p></blockquote><p><a href="https://tsch.js.org/612/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="도전하기"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

`camelCase`나 `PascalCase`를 `kebab-case` 문자열로 수정하세요.

`FooBarBaz` -> `foo-bar-baz`

예시:

```ts
type FooBarBaz = KebabCase<"FooBarBaz">
const foobarbaz: FooBarBaz = "foo-bar-baz"

type DoNothing = KebabCase<"do-nothing">
const doNothing: DoNothing = "do-nothing"
```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="돌아가기"/></a> <a href="https://tsch.js.org/612/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="정답 공유하기"/></a> <a href="https://tsch.js.org/612/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="정답 보기"/></a> <hr><h3>Related Challenges</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00114-hard-camelcase/README.md" target="_blank"><img src="https://img.shields.io/badge/-114%E3%83%BBCamelCase-de3d37" alt="114・CamelCase"/></a> <!--info-footer-end-->

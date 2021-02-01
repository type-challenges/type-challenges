<!--info-header-start--><h1>Length of String 2 <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><blockquote><p>by null <a href="https://github.com/uid11" target="_blank">@uid11</a></p></blockquote><p><a href="https://tsch.js.org/651/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

テンプレート文字列の長さを計算する`LengthOfString<S>`を実装します。([298 - Length of String](https://tsch.js.org/298)と同じような型):

```ts
type T0 = LengthOfString<'foo'>; // 3
```

この課題で実装する型は、数百文字の長さの文字列をサポートしなければなりません(通常の再帰的な文字列長の計算は、TS の再帰的な関数呼び出しの深さによって制限されています、つまり、45 文字程度までの文字列をサポートしています)。

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/651/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/651/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <hr><h3>Related Challenges</h3><a href="https://github.com/type-challenges/type-challenges/blob/master/questions/298-medium-length-of-string/README.md" target="_blank"><img src="https://img.shields.io/badge/-298%E3%83%BBLength%20of%20String-d9901a" alt="298・Length of String"/></a> <!--info-footer-end-->

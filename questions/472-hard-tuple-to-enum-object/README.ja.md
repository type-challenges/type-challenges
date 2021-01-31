<!--info-header-start--><h1>Tuple to Enum Object <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><blockquote><p>by Ryo Hanafusa <a href="https://github.com/softoika" target="_blank">@softoika</a></p></blockquote><p><a href="https://tsch.js.org/472/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

enum は TypeScript 独自の文法です(JavaScript にはありません)。そのため、以下の形式にトランスパイルされます。

```js
let OperatingSystem;
(function (OperatingSystem) {
  OperatingSystem[(OperatingSystem['MacOS'] = 0)] = 'MacOS';
  OperatingSystem[(OperatingSystem['Windows'] = 1)] = 'Windows';
  OperatingSystem[(OperatingSystem['Linux'] = 2)] = 'Linux';
})(OperatingSystem || (OperatingSystem = {}));
```

この問題では、文字列のタプルを enum と同じようなオブジェクトに変換する型を実装します。
さらに、enum のプロパティはパスカルケースであることが好ましいです。

```ts
Enum<["macOS", "Windows", "Linux"]>
// -> { readonly MacOS: "macOS", readonly Windows: "Windows", readonly Linux: "Linux" }
```

第 2 引数に`true`が与えられた場合、値は数値リテラルとなります。

```ts
Enum<["macOS", "Windows", "Linux"], true>
// -> { readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }
```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/472/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/472/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->

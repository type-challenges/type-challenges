<!--info-header-start--><h1>Tuple to Enum Object <img src="https://img.shields.io/badge/-%E4%B8%8A%E7%B4%9A-de3d37" alt="上級"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><blockquote><p>by Ryo Hanafusa <a href="https://github.com/softoika" target="_blank">@softoika</a></p></blockquote><p><a href="https://tsch.js.org/472/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript&logoColor=white" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

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

<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/472/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/472/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <hr><h3>関連する課題</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-10%E3%83%BBTuple%20to%20Union-d9901a" alt="10・Tuple to Union"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-11%E3%83%BBTuple%20to%20Object-7aad0c" alt="11・Tuple to Object"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00730-hard-union-to-tuple/README.md" target="_blank"><img src="https://img.shields.io/badge/-730%E3%83%BBUnion%20to%20Tuple-de3d37" alt="730・Union to Tuple"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/03188-medium-tuple-to-nested-object/README.md" target="_blank"><img src="https://img.shields.io/badge/-3188%E3%83%BBTuple%20to%20Nested%20Object-d9901a" alt="3188・Tuple to Nested Object"/></a> <!--info-footer-end-->

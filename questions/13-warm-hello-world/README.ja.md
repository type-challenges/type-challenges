<!--info-header-start--><h1>ハローワールド <img src="https://img.shields.io/badge/-%E6%BA%96%E5%82%99%E3%81%97%E5%A7%8B%E3%82%81%E3%82%8B-teal" alt="準備し始める"/> </h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/13/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->

Hello, World!

Type Challenges では、型システム自体を使用してアサーションを実行します。

この課題では、次のコードを変更してテストに合格する必要があります（型チェックエラーなし）。

```ts
// expected to be string
type HelloWorld = any
```

```ts
// you should make this work
type test = Expect<Equal<HelloWorld, string>>
```

「挑戦する」ボタンをクリックしてコーディングを開始してください！ ハッキングハッピー！

<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E3%83%90%E3%83%83%E3%82%AF-grey" alt="バック"/></a> <a href="https://tsch.js.org/13/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E3%82%BD%E3%83%AA%E3%83%A5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E5%85%B1%E6%9C%89%E3%81%99%E3%82%8B-teal" alt="ソリューションを共有する"/></a> <a href="https://tsch.js.org/13/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E3%82%BD%E3%83%AA%E3%83%A5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E7%A2%BA%E8%AA%8D%E3%81%99%E3%82%8B-de5a77?logo=awesome-lists&logoColor=white" alt="ソリューションを確認する"/></a> <!--info-footer-end-->

<!--info-header-start--><h1>確定した文字列リテラル <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%B4%9A-d9901a" alt="中級"/> </h1><blockquote><p>by 蛭子屋双六 <a href="https://github.com/sugoroku-y" target="_blank">@sugoroku-y</a></p></blockquote><p><a href="https://tsch.js.org/30970/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript&logoColor=white" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

確定した文字列リテラル型かどうか、を判別したい場合があります。例えばクラスの識別子として指定された型が確定した文字列リテラル型であるか確認したいときです。

```ts
type Action<ID extends string> = { readonly id: ID };
```

確定している必要があるので以下の型はfalseと判定する必要があります。

- never型
- 文字列リテラル型のUnion
- string、number、bigint、booleanが埋め込まれたテンプレートリテラル型

与えられた型Sが確定した文字列リテラル型かどうかを判別して下さい


<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/30970/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/30970/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <!--info-footer-end-->
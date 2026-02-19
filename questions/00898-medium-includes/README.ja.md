<!--info-header-start--><h1>Includes <img src="https://img.shields.io/badge/-%E5%88%9D%E7%B4%9A-7aad0c" alt="初級"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>by null <a href="https://github.com/kynefuk" target="_blank">@kynefuk</a></p></blockquote><p><a href="https://tsch.js.org/898/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript&logoColor=white" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ko.md" target="_blank"><img src="https://img.shields.io/badge/-%ED%95%9C%EA%B5%AD%EC%96%B4-gray" alt="한국어"/></a> </p><!--info-header-end-->

JavaScriptの`Array.include`関数を型システムに実装します。この型は、2 つの引数を受け取り、`true`や`false`を出力しなければなりません。

例えば：

```ts
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
```


<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/898/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/898/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <!--info-footer-end-->
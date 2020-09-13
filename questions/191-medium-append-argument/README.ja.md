<!--info-header-start--><h1>Append Argument <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%B4%9A-eaa648" alt="中級"/> <img src="https://img.shields.io/badge/-%23arguments-999" alt="#arguments"/></h1><blockquote><p>by Maciej Sikora <a href="https://github.com/maciejsikora" target="_blank">@maciejsikora</a></p></blockquote><p><a href="https://tsch.js.org/191/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->

> この課題はGoogleが翻訳しました。翻訳品質改善のためのPRを募集しています。

与えられた関数タイプFと任意のタイプA（このコンテキストでは、タイプを制限しないことを意味し、どのタイプmindも考慮しないことを意味します）に対して、最初の引数AとしてFを取るジェネリックタイプを作成しますFと同じですが、最初の引数として引数Aが追加された関数型Gを生成します。

```typescript
// lets say we have some function type
type SomeF = (a: number, b: string) => number
// and we have our utility type
type AppendArgument<F, A> = ... here your code 💪

type FinalF = AppendArgument<SomeF, boolean> 
// FinalF should be (x: boolean, a: number, b: string) => number
```

>この質問は、[@maciejsikora]（https://github.com/maciejsikora）による[元の記事]（https://dev.to/macsikora/advanced-typescript-exercises-question-4-495c）から移植されました。

<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/191/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/191/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <!--info-footer-end-->
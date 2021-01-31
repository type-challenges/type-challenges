<!--info-header-start--><h1>Tuple Filter <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23infer-999" alt="#infer"/></h1><blockquote><p>by Ryo Hanafusa <a href="https://github.com/softoika" target="_blank">@softoika</a></p></blockquote><p><a href="https://tsch.js.org/399/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

タプル`T`から指定された型`F`をフィルタリングする`FilterOut<T, F>`を実装します。

例えば、

```ts
type Filtered = FilterOut<[1, 2, null, 3], null>; // [1, 2, 3]
```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/399/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/399/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->

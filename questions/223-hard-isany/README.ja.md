<!--info-header-start--><h1>IsAny <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/></h1><blockquote><p>by Pavel Glushkov <a href="https://github.com/pashutk" target="_blank">@pashutk</a></p></blockquote><p><a href="https://tsch.js.org/223/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

`any`型の値を持っているかを検出することが便利な場合があります。これは、モジュール API で`any`型の値をエクスポート可能なサードーパーティーの TypeScript モジュールを使用する際に
特に便利です。また、implicitAny チェックを抑制する際に`any`型について知ることは良いことです。

そこで、型`T`を受け取るユーティリティ型`IsAny<T>`を書いてみましょう。`T`が`any`型であれば`true`を返し、そうでなければ`false`を返します。

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/223/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/223/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->

/*
  223 - IsAny
  -------
  by Pavel Glushkov (@pashutk) #上級 #utils

  ### 質問

  `any`型の値を持っているかを検出することが便利な場合があります。これは、モジュール API で`any`型の値をエクスポート可能なサードーパーティーの TypeScript モジュールを使用する際に
  特に便利です。また、implicitAny チェックを抑制する際に`any`型について知ることは良いことです。

  そこで、型`T`を受け取るユーティリティ型`IsAny<T>`を書いてみましょう。`T`が`any`型であれば`true`を返し、そうでなければ`false`を返します。

  > GitHubで確認する：https://tsch.js.org/223/ja
*/

/* _____________ ここにコードを記入 _____________ */

type IsAny<T> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsAny<any>, true>>,

  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/223/answer/ja
  > 解答を見る：https://tsch.js.org/223/solutions
  > その他の課題：https://tsch.js.org/ja
*/

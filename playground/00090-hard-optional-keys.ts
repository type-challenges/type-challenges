/*
  90 - Optional Keys
  -------
  by yituan (@yi-tuan) #上級 #utils

  ### 質問

  オプショナルなキーの Union を抽出する高度なユーティリティ型 `OptionalKeys<T>` を実装してください。

  > GitHubで確認する：https://tsch.js.org/90/ja
*/

/* _____________ ここにコードを記入 _____________ */

type OptionalKeys<T> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<OptionalKeys<{ a: number; b?: string }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>, 'b' | 'c' | 'd'>>,
  Expect<Equal<OptionalKeys<{}>, never>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/90/answer/ja
  > 解答を見る：https://tsch.js.org/90/solutions
  > その他の課題：https://tsch.js.org/ja
*/

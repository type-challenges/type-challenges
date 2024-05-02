/*
  298 - Length of String
  -------
  by Pig Fang (@g-plane) #中級 #template-literal

  ### 質問

  `String#length` と同じように、文字列リテラルの長さを計算します。

  > GitHubで確認する：https://tsch.js.org/298/ja
*/

/* _____________ ここにコードを記入 _____________ */

type LengthOfString<S extends string> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/298/answer/ja
  > 解答を見る：https://tsch.js.org/298/solutions
  > その他の課題：https://tsch.js.org/ja
*/

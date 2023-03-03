/*
  300 - String to Number
  -------
  by Pig Fang (@g-plane) #上級 #template-literal

  ### 質問

  `Number.parseInt`のように、文字列リテラルを数値に変換する型を実装します。

  > GitHubで確認する：https://tsch.js.org/300/ja
*/

/* _____________ ここにコードを記入 _____________ */

type ToNumber<S extends string> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ToNumber<'0'>, 0>>,
  Expect<Equal<ToNumber<'5'>, 5>>,
  Expect<Equal<ToNumber<'12'>, 12>>,
  Expect<Equal<ToNumber<'27'>, 27>>,
  Expect<Equal<ToNumber<'18@7_$%'>, never>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/300/answer/ja
  > 解答を見る：https://tsch.js.org/300/solutions
  > その他の課題：https://tsch.js.org/ja
*/

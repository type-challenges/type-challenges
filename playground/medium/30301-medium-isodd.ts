/*
  30301 - IsOdd
  -------
  by jiangshan (@jiangshanmeta) #中級 #string

  ### 質問

  return true is a number is odd

  > GitHubで確認する：https://tsch.js.org/30301/ja
*/

/* _____________ ここにコードを記入 _____________ */

type IsOdd<T extends number> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsOdd<5>, true>>,
  Expect<Equal<IsOdd<2023>, true>>,
  Expect<Equal<IsOdd<1453>, true>>,
  Expect<Equal<IsOdd<1926>, false>>,
  Expect<Equal<IsOdd<2.3>, false>>,
  Expect<Equal<IsOdd<3e23>, false>>,
  Expect<Equal<IsOdd<number>, false>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/30301/answer/ja
  > 解答を見る：https://tsch.js.org/30301/solutions
  > その他の課題：https://tsch.js.org/ja
*/

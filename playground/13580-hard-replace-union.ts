/*
  13580 - Replace Union
  -------
  by Konstantin Barabanov (@crutch12) #上級

  ### 質問

  Given an `union of types` and `array of type pairs` to replace (`[[string, number], [Date, null]]`), return a new union replaced with the `type pairs`.

  > GitHubで確認する：https://tsch.js.org/13580/ja
*/

/* _____________ ここにコードを記入 _____________ */

type UnionReplace<T, U extends [any, any][]> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  // string -> null
  Expect<Equal<UnionReplace<number | string, [[string, null]]>, number | null>>,

  // Date -> string; Function -> undefined
  Expect<Equal<UnionReplace<Function | Date | object, [[Date, string], [Function, undefined]]>, undefined | string | object>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/13580/answer/ja
  > 解答を見る：https://tsch.js.org/13580/solutions
  > その他の課題：https://tsch.js.org/ja
*/

/*
  10969 - Integer
  -------
  by HuaBing (@hbcraft) #中級 #template-literal

  ### 質問

  Please complete type `Integer<T>`, type `T` inherits from `number`, if `T` is an integer return it, otherwise return `never`.

  > GitHubで確認する：https://tsch.js.org/10969/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Integer<T> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

let x = 1
let y = 1 as const

type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<Integer<1.1>, never>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/10969/answer/ja
  > 解答を見る：https://tsch.js.org/10969/solutions
  > その他の課題：https://tsch.js.org/ja
*/

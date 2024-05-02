/*
  9898 - Appear only once
  -------
  by X.Q. Chen (@brenner8023) #中級

  ### 質問

  Find the elements in the target array that appear only once. For example：input: `[1,2,2,3,3,4,5,6,6,6]`，ouput: `[1,4,5]`.

  > GitHubで確認する：https://tsch.js.org/9898/ja
*/

/* _____________ ここにコードを記入 _____________ */

type FindEles<T extends any[]> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
  Expect<Equal<FindEles<[2, 2, 3, 3, 6, 6, 6]>, []>>,
  Expect<Equal<FindEles<[1, 2, 3]>, [1, 2, 3]>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/9898/answer/ja
  > 解答を見る：https://tsch.js.org/9898/solutions
  > その他の課題：https://tsch.js.org/ja
*/

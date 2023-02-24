/*
  55 - Union to Intersection
  -------
  by Zheeeng (@zheeeng) #上級 #utils #infer

  ### 質問

  高度なユーティリティ型 `UnionToIntersection<U>` を実装してください。

  例えば

  ```ts
  type I = Union2Intersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true
  ```

  > GitHubで確認する：https://tsch.js.org/55/ja
*/

/* _____________ ここにコードを記入 _____________ */

type UnionToIntersection<U> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/55/answer/ja
  > 解答を見る：https://tsch.js.org/55/solutions
  > その他の課題：https://tsch.js.org/ja
*/

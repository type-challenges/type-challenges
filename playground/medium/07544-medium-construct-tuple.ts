/*
  7544 - Construct Tuple
  -------
  by Lo (@LoTwT) #中級 #tuple

  ### 質問

  Construct a tuple with a given length.

  For example

  ```ts
  type result = ConstructTuple<2> // expect to be [unknown, unkonwn]
  ```

  > GitHubで確認する：https://tsch.js.org/7544/ja
*/

/* _____________ ここにコードを記入 _____________ */

type ConstructTuple<L extends number> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>['length'], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>['length'], 1000>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/7544/answer/ja
  > 解答を見る：https://tsch.js.org/7544/solutions
  > その他の課題：https://tsch.js.org/ja
*/

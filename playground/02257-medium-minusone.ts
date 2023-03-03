/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #中級 #math

  ### 質問

  Given a number (always positive) as a type. Your type should return the number decreased by one.

  For example:

  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```

  > GitHubで確認する：https://tsch.js.org/2257/ja
*/

/* _____________ ここにコードを記入 _____________ */

type MinusOne<T extends number> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/2257/answer/ja
  > 解答を見る：https://tsch.js.org/2257/solutions
  > その他の課題：https://tsch.js.org/ja
*/

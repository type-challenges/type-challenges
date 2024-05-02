/*
  3060 - Unshift
  -------
  by jiangshan (@jiangshanmeta) #初級 #array

  ### 質問

  ```Array.unshift```の型バージョンを実装します。

  例えば：

  ```typescript
  type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
  ```

  > GitHubで確認する：https://tsch.js.org/3060/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Unshift<T, U> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/3060/answer/ja
  > 解答を見る：https://tsch.js.org/3060/solutions
  > その他の課題：https://tsch.js.org/ja
*/

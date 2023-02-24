/*
  3062 - Shift
  -------
  by jiangshan (@jiangshanmeta) #中級 #array

  ### 質問

  Implement the type version of ```Array.shift```

  For example

  ```typescript
  type Result = Shift<[3, 2, 1]> // [2, 1]
  ```

  > GitHubで確認する：https://tsch.js.org/3062/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Shift<T> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // @ts-expect-error
  Shift<unknown>,
  Expect<Equal<Shift<[]>, []>>,
  Expect<Equal<Shift<[1]>, []>>,
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/3062/answer/ja
  > 解答を見る：https://tsch.js.org/3062/solutions
  > その他の課題：https://tsch.js.org/ja
*/

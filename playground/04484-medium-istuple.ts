/*
  4484 - IsTuple
  -------
  by jiangshan (@jiangshanmeta) #中級 #tuple

  ### 質問

  Implement a type ```IsTuple```, which takes an input type ```T``` and returns whether ```T``` is tuple type.

  For example:

  ```typescript
  type case1 = IsTuple<[number]> // true
  type case2 = IsTuple<readonly [number]> // true
  type case3 = IsTuple<number[]> // false
  ```

  > GitHubで確認する：https://tsch.js.org/4484/ja
*/

/* _____________ ここにコードを記入 _____________ */

type IsTuple<T> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/4484/answer/ja
  > 解答を見る：https://tsch.js.org/4484/solutions
  > その他の課題：https://tsch.js.org/ja
*/

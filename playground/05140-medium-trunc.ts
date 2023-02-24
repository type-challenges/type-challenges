/*
  5140 - Trunc
  -------
  by jiangshan (@jiangshanmeta) #中級 #template-literal

  ### 質問

  Implement the type version of ```Math.trunc```, which takes string or number and returns the integer part of a number by removing any fractional digits.

  For example:

  ```typescript
  type A = Trunc<12.34> // 12
  ```

  > GitHubで確認する：https://tsch.js.org/5140/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Trunc = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trunc<0.1>, '0'>>,
  Expect<Equal<Trunc<1.234>, '1'>>,
  Expect<Equal<Trunc<12.345>, '12'>>,
  Expect<Equal<Trunc<-5.1>, '-5'>>,
  Expect<Equal<Trunc<'1.234'>, '1'>>,
  Expect<Equal<Trunc<'-10.234'>, '-10'>>,
  Expect<Equal<Trunc<10>, '10'>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/5140/answer/ja
  > 解答を見る：https://tsch.js.org/5140/solutions
  > その他の課題：https://tsch.js.org/ja
*/

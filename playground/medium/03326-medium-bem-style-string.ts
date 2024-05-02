/*
  3326 - BEM style string
  -------
  by Songhn (@songhn233) #中級 #template-literal #union #tuple

  ### 質問

  The Block, Element, Modifier methodology (BEM) is a popular naming convention for classes in CSS.

  For example, the block component would be represented as `btn`, element that depends upon the block would be represented as `btn__price`, modifier that changes the style of the block would be represented as `btn--big` or `btn__price--warning`.

  Implement `BEM<B, E, M>` which generate string union from these three parameters. Where `B` is a string literal, `E` and `M` are string arrays (can be empty).

  > GitHubで確認する：https://tsch.js.org/3326/ja
*/

/* _____________ ここにコードを記入 _____________ */

type BEM<B extends string, E extends string[], M extends string[]> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success' >>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large' >>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/3326/answer/ja
  > 解答を見る：https://tsch.js.org/3326/solutions
  > その他の課題：https://tsch.js.org/ja
*/

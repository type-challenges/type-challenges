/*
  27133 - Square
  -------
  by null (@aswinsvijay) #中級 #tuple #array #math

  ### 質問

  Given a number, your type should return its square.

  > GitHubで確認する：https://tsch.js.org/27133/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Square<N extends number> = number

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Square<0>, 0>>,
  Expect<Equal<Square<1>, 1>>,
  Expect<Equal<Square<3>, 9>>,
  Expect<Equal<Square<20>, 400>>,
  Expect<Equal<Square<100>, 10000>>,

  // Negative numbers
  Expect<Equal<Square<-2>, 4>>,
  Expect<Equal<Square<-5>, 25>>,
  Expect<Equal<Square<-31>, 961>>,
  Expect<Equal<Square<-50>, 2500>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/27133/answer/ja
  > 解答を見る：https://tsch.js.org/27133/solutions
  > その他の課題：https://tsch.js.org/ja
*/

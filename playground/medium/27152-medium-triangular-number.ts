/*
  27152 - Triangular number
  -------
  by null (@aswinsvijay) #中級 #tuple #array #math

  ### 質問

  Given a number N, find the Nth triangular number, i.e. `1 + 2 + 3 + ... + N`

  > GitHubで確認する：https://tsch.js.org/27152/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Triangular<N extends number> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Triangular<0>, 0>>,
  Expect<Equal<Triangular<1>, 1>>,
  Expect<Equal<Triangular<3>, 6>>,
  Expect<Equal<Triangular<10>, 55>>,
  Expect<Equal<Triangular<20>, 210>>,
  Expect<Equal<Triangular<55>, 1540>>,
  Expect<Equal<Triangular<100>, 5050>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/27152/answer/ja
  > 解答を見る：https://tsch.js.org/27152/solutions
  > その他の課題：https://tsch.js.org/ja
*/

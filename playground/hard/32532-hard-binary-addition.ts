/*
  32532 - Binary Addition
  -------
  by Finley Garton (@finleygn) #上級 #recursion #array

  ### 質問

  Implement `BinaryAdd` to add two binary numbers together. The numbers should not be translated out of binary at any point.

  Note the two inputs will always have the same length.

  > GitHubで確認する：https://tsch.js.org/32532/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Bit = 1 | 0

type BinaryAdd<A extends Bit[], B extends Bit[]> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<
    BinaryAdd<[1], [1]>,
    [1, 0]
  >>,
  Expect<Equal<
    BinaryAdd<[0], [1]>,
    [1]
  >>,
  Expect<Equal<
    BinaryAdd<[1, 1, 0], [0, 0, 1]>,
    [1, 1, 1]
  >>,
  Expect<Equal<
    BinaryAdd<[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]>,
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
  >>,
  Expect<Equal<
    BinaryAdd<[1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 1, 1, 0, 0]>,
    [1, 0, 0, 1, 1, 1, 0, 1, 0]
  >>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/32532/answer/ja
  > 解答を見る：https://tsch.js.org/32532/solutions
  > その他の課題：https://tsch.js.org/ja
*/

/*
  14188 - Run-length encoding
  -------
  by Hen Hedymdeith (@alfaproxima) #上級

  ### 質問

  Given a `string` sequence of a letters f.e. `AAABCCXXXXXXY`. Return run-length encoded string `3AB2C6XY`.
  Also make a decoder for that string.

  > GitHubで確認する：https://tsch.js.org/14188/ja
*/

/* _____________ ここにコードを記入 _____________ */

namespace RLE {
  export type Encode<S extends string> = any
  export type Decode<S extends string> = any
}

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // Raw string -> encoded string
  Expect<Equal<RLE.Encode<'AAABCCXXXXXXY'>, '3AB2C6XY'>>,

  // Encoded string -> decoded string
  Expect<Equal<RLE.Decode<'3AB2C6XY'>, 'AAABCCXXXXXXY'>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/14188/answer/ja
  > 解答を見る：https://tsch.js.org/14188/solutions
  > その他の課題：https://tsch.js.org/ja
*/

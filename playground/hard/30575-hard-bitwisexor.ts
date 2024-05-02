/*
  30575 - BitwiseXOR
  -------
  by jiangshan (@jiangshanmeta) #上級

  ### 質問

  Implement ```BitwiseXOR<S1,S2>``` which takes two binary string literal type and returns a binary string that reprents the bitwise XOR of S1 and S2

  For example:

  ```typescript
  BitwiseXOR<'0','1'> // expect '1'
  BitwiseXOR<'1','1'> // expect '0'
  BitwiseXOR<'10','1'>  // expect '11'
  ```

  > GitHubで確認する：https://tsch.js.org/30575/ja
*/

/* _____________ ここにコードを記入 _____________ */

type BitwiseXOR<S1 extends string, S2 extends string> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BitwiseXOR<'0', '1'>, '1'>>,
  Expect<Equal<BitwiseXOR<'1', '1'>, '0'>>,
  Expect<Equal<BitwiseXOR<'10', '1'>, '11'>>,
  Expect<Equal<BitwiseXOR<'110', '1'>, '111'>>,
  Expect<Equal<BitwiseXOR<'101', '11'>, '110'>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/30575/answer/ja
  > 解答を見る：https://tsch.js.org/30575/solutions
  > その他の課題：https://tsch.js.org/ja
*/

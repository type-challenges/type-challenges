/*
  9142 - CheckRepeatedChars
  -------
  by Hong (@RThong) #中級 #union #string

  ### 質問

  Implement type ```CheckRepeatedChars<S>``` which will return whether type ```S``` contains duplicated chars?

  For example:

  ```ts
  type CheckRepeatedChars<'abc'>   // false
  type CheckRepeatedChars<'aba'>   // true
  ```

  > GitHubで確認する：https://tsch.js.org/9142/ja
*/

/* _____________ ここにコードを記入 _____________ */

type CheckRepeatedChars<T extends string> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CheckRepeatedChars<'abc'>, false>>,
  Expect<Equal<CheckRepeatedChars<'abb'>, true>>,
  Expect<Equal<CheckRepeatedChars<'cbc'>, true>>,
  Expect<Equal<CheckRepeatedChars<''>, false>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/9142/answer/ja
  > 解答を見る：https://tsch.js.org/9142/solutions
  > その他の課題：https://tsch.js.org/ja
*/

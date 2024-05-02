/*
  2693 - EndsWith
  -------
  by jiangshan (@jiangshanmeta) #中級 #template-literal

  ### 質問

  Implement `EndsWith<T, U>` which takes two exact string types and returns whether `T` ends with `U`

  For example:

  ```typescript
  type a = EndsWith<'abc', 'bc'> // expected to be true
  type b = EndsWith<'abc', 'abc'> // expected to be true
  type c = EndsWith<'abc', 'd'> // expected to be false
  ```

  > GitHubで確認する：https://tsch.js.org/2693/ja
*/

/* _____________ ここにコードを記入 _____________ */

type EndsWith<T extends string, U extends string> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'd'>, false>>,
  Expect<Equal<EndsWith<'abc', 'ac'>, false>>,
  Expect<Equal<EndsWith<'abc', ''>, true>>,
  Expect<Equal<EndsWith<'abc', ' '>, false>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/2693/answer/ja
  > 解答を見る：https://tsch.js.org/2693/solutions
  > その他の課題：https://tsch.js.org/ja
*/

/*
  5181 - Mutable Keys
  -------
  by Yugang Cao (@Talljack) #上級 #utils

  ### 質問

  Implement the advanced util type MutableKeys<T>, which picks all the mutable (not readonly) keys into a union.

  For example:

  ```ts
  type Keys = MutableKeys<{ readonly foo: string; bar: number }>;
  // expected to be “bar”
  ```

  > GitHubで確認する：https://tsch.js.org/5181/ja
*/

/* _____________ ここにコードを記入 _____________ */

type MutableKeys<T> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MutableKeys<{ a: number; readonly b: string }>, 'a'>>,
  Expect<Equal<MutableKeys<{ a: undefined; readonly b: undefined }>, 'a'>>,
  Expect<Equal<MutableKeys<{ a: undefined; readonly b?: undefined; c: string; d: null }>, 'a' | 'c' | 'd'>>,
  Expect<Equal<MutableKeys<{}>, never>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/5181/answer/ja
  > 解答を見る：https://tsch.js.org/5181/solutions
  > その他の課題：https://tsch.js.org/ja
*/

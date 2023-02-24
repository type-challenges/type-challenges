/*
  57 - Get Required
  -------
  by Zheeeng (@zheeeng) #上級 #utils #infer

  ### 質問

  必須なフィールドのみを残す高度なユーティリティ型 `GetRequired<T>` を実装してください。

  例えば

  ```ts
  type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }
  ```

  > GitHubで確認する：https://tsch.js.org/57/ja
*/

/* _____________ ここにコードを記入 _____________ */

type GetRequired<T> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/57/answer/ja
  > 解答を見る：https://tsch.js.org/57/solutions
  > その他の課題：https://tsch.js.org/ja
*/

/*
  89 - Required Keys
  -------
  by yituan (@yi-tuan) #上級 #utils

  ### 質問

  必須なキーの Union を抽出する高度なユーティリティ型 `RequiredKeys<T>` を実装してください。

  例えば

  ```ts
  type Result = RequiredKeys<{ foo: number; bar?: string }>;
  // expected to be “foo”
  ```

  > GitHubで確認する：https://tsch.js.org/89/ja
*/

/* _____________ ここにコードを記入 _____________ */

type RequiredKeys<T> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<RequiredKeys<{ a: number; b?: string }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>, 'a' | 'c' | 'd'>>,
  Expect<Equal<RequiredKeys<{}>, never>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/89/answer/ja
  > 解答を見る：https://tsch.js.org/89/solutions
  > その他の課題：https://tsch.js.org/ja
*/

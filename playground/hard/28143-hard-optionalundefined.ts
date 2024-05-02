/*
  28143 - OptionalUndefined
  -------
  by Jesus The Hun (@JesusTheHun) #上級

  ### 質問

  Implement the util type `OptionalUndefined<T, Props>` that turns all the properties of `T` that can be `undefined`, into optional properties. In addition, a second -optional- generic `Props` can be passed to restrict the properties that can be altered.

  ```ts
  OptionalUndefined<{ value: string | undefined, description: string }>
  // { value?: string | undefined; description: string }

  OptionalUndefined<{ value: string | undefined, description: string | undefined, author: string | undefined }, 'description' | 'author'>
  // { value: string | undefined; description?: string | undefined, author?: string | undefined }
  ```

  > GitHubで確認する：https://tsch.js.org/28143/ja
*/

/* _____________ ここにコードを記入 _____________ */

type OptionalUndefined<T, Props> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<OptionalUndefined<{ value: string | undefined }, 'value'>, { value?: string | undefined }>>,
  Expect<Equal<OptionalUndefined<{ value: string, desc: string }, 'value'>, { value: string, desc: string }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined, desc: string }, 'value'>, { value?: string, desc: string }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined, desc: string | undefined }, 'value'>, { value?: string | undefined, desc: string | undefined }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined, desc: string }, 'value' | 'desc'>, { value?: string, desc: string }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined, desc: string | undefined }>, { value?: string, desc?: string }>>,
  Expect<Equal<OptionalUndefined<{ value?: string }, 'value'>, { value?: string }>>,
  Expect<Equal<OptionalUndefined<{ value?: string }>, { value?: string }>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/28143/answer/ja
  > 解答を見る：https://tsch.js.org/28143/solutions
  > その他の課題：https://tsch.js.org/ja
*/

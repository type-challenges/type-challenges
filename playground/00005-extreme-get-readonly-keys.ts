/*
  5 - Get Readonly Keys
  -------
  by Anthony Fu (@antfu) #最上級 #utils #object-keys

  ### 質問

  オブジェクトの読み取り専用キーの Union を返す汎用的な `GetReadonlyKeys<T>` を実装してください。

  例えば

  ```ts
  interface Todo {
    readonly title: string
    readonly description: string
    completed: boolean
  }

  type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
  ```

  > GitHubで確認する：https://tsch.js.org/5/ja
*/

/* _____________ ここにコードを記入 _____________ */

type GetReadonlyKeys<T> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/5/answer/ja
  > 解答を見る：https://tsch.js.org/5/solutions
  > その他の課題：https://tsch.js.org/ja
*/

/*
  4 - Pick
  -------
  by Anthony Fu (@antfu) #初級 #union #built-in

  ### 質問

  組み込みの型ユーティリティ`Pick<T, K>`を使用せず、`T`から`K`のプロパティを抽出する型を実装します。

  例えば：

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```

  > GitHubで確認する：https://tsch.js.org/4/ja
*/

/* _____________ ここにコードを記入 _____________ */

type MyPick<T, K> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/4/answer/ja
  > 解答を見る：https://tsch.js.org/4/solutions
  > その他の課題：https://tsch.js.org/ja
*/

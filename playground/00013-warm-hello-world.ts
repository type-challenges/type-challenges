/*
  13 - Hello World
  -------
  by Anthony Fu (@antfu) #お試し

  ### 質問

  Hello, World!

  Type Challenges では、型システム自体を使用してアサーションを実行します。

  この課題では、次のコードを変更してテストに合格する必要があります（型チェックエラーなし）。

  ```ts
  // expected to be string
  type HelloWorld = any
  ```

  ```ts
  // you should make this work
  type test = Expect<Equal<HelloWorld, string>>
  ```

  「挑戦する」ボタンをクリックしてコーディングを開始してください！ Happy Hacking！

  > GitHubで確認する：https://tsch.js.org/13/ja
*/

/* _____________ ここにコードを記入 _____________ */

type HelloWorld = any // expected to be a string

/* _____________ テストケース _____________ */
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/13/answer/ja
  > 解答を見る：https://tsch.js.org/13/solutions
  > その他の課題：https://tsch.js.org/ja
*/

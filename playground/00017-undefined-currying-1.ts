/*
  17 - Currying 1
  -------
  by Anthony Fu (@antfu) #上級 #array

  ### 質問

  > この課題ではTypeScript 4.0が推奨されます

  [カリー化](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AA%E3%83%BC%E5%8C%96)とは、複数の引数を取る関数を、それぞれの 1 つの引数を取る関数の列に変換するテクニックです。

  例えば：

  ```ts
  const add = (a: number, b: number) => a + b
  const three = add(1, 2)

  const curriedAdd = Currying(add)
  const five = curriedAdd(2)(3)
  ```

  `Currying` に渡された関数は複数の引数を持つ場合があり、正しく型を付ける必要があります。

  この課題では、カリー化された関数は一度に 1 つの引数しか受け付けません。すべての引数が代入されたら、その結果を返す必要があります。

  > GitHubで確認する：https://tsch.js.org/17/ja
*/

/* _____________ ここにコードを記入 _____________ */

declare function Currying(fn: any): any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)
const curried3 = Currying(() => true)

type cases = [
  Expect<Equal<
    typeof curried1, (a: string) => (b: number) => (c: boolean) => true
  >>,
  Expect<Equal<
    typeof curried2, (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
  >>,
  Expect<Equal<typeof curried3, () => true>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/17/answer/ja
  > 解答を見る：https://tsch.js.org/17/solutions
  > その他の課題：https://tsch.js.org/ja
*/

/*
  191 - Append Argument
  -------
  by Maciej Sikora (@maciejsikora) #中級 #arguments

  ### 質問

  与えられた関数型 `Fn` と任意の型 `A` に対して、第一引数に `Fn` を取り、第二引数に `A` を取り、`Fn` の引数に `A` を追加した関数型 `G` を生成します。

  例えば、

  ```typescript
  type Fn = (a: number, b: string) => number

  type Result = AppendArgument<Fn, boolean>
  // expected be (a: number, b: string, x: boolean) => number
  ```

  > この質問は、[@maciejsikora](https://github.com/maciejsikora) による[元の記事](https://dev.to/macsikora/advanced-typescript-exercises-question-4-495c)から移植されました。

  > GitHubで確認する：https://tsch.js.org/191/ja
*/

/* _____________ ここにコードを記入 _____________ */

type AppendArgument<Fn, A> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
  // @ts-expect-error
  AppendArgument<unknown, undefined>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/191/answer/ja
  > 解答を見る：https://tsch.js.org/191/solutions
  > その他の課題：https://tsch.js.org/ja
*/

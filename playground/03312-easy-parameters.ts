/*
  3312 - Parameters
  -------
  by midorizemi (@midorizemi) #初級 #infer #tuple #built-in

  ### 質問

  組み込みの型ユーティリティ`Parameters<T>`を使用せず、`T`からタプル型を構築する型を実装します。

  例えば：

  ```ts
  const foo = (arg1: string, arg2: number): void => {}

  type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
  ```

  > GitHubで確認する：https://tsch.js.org/3312/ja
*/

/* _____________ ここにコードを記入 _____________ */

type MyParameters<T extends (...args: any[]) => any> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {}
const baz = (): void => {}

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/3312/answer/ja
  > 解答を見る：https://tsch.js.org/3312/solutions
  > その他の課題：https://tsch.js.org/ja
*/

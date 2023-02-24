/*
  15 - Last of Array
  -------
  by Anthony Fu (@antfu) #中級 #array

  ### 質問

  > この課題ではTypeScript 4.0が推奨されます

  配列 `T` を受け取り、その最後の要素の型を返す汎用的な `Last<T>` を実装してください。

  例えば

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type tail1 = Last<arr1> // expected to be 'c'
  type tail2 = Last<arr2> // expected to be 1
  ```

  > GitHubで確認する：https://tsch.js.org/15/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Last<T extends any[]> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/15/answer/ja
  > 解答を見る：https://tsch.js.org/15/solutions
  > その他の課題：https://tsch.js.org/ja
*/

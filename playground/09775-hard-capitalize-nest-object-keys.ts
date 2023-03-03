/*
  9775 - Capitalize Nest Object Keys
  -------
  by MayanDev (@Mayandev) #上級 #object #array

  ### 質問

  Capitalize the key of the object, and if the value is an array, iterate through the objects in the array.

  > GitHubで確認する：https://tsch.js.org/9775/ja
*/

/* _____________ ここにコードを記入 _____________ */

type CapitalizeNestObjectKeys<T> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type foo = {
  foo: string
  bars: [{ foo: string }]
}

type Foo = {
  Foo: string
  Bars: [{
    Foo: string
  }]
}

type cases = [
  Expect<Equal<Foo, CapitalizeNestObjectKeys<foo>>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/9775/answer/ja
  > 解答を見る：https://tsch.js.org/9775/solutions
  > その他の課題：https://tsch.js.org/ja
*/

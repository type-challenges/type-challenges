/*
  2595 - PickByType
  -------
  by jiangshan (@jiangshanmeta) #中級 #object

  ### 質問

  From `T`, pick a set of properties whose type are assignable to `U`.

  For Example

  ```typescript
  type OnlyBoolean = PickByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { isReadonly: boolean; isEnable: boolean; }
  ```

  > GitHubで確認する：https://tsch.js.org/2595/ja
*/

/* _____________ ここにコードを記入 _____________ */

type PickByType<T, U> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/2595/answer/ja
  > 解答を見る：https://tsch.js.org/2595/solutions
  > その他の課題：https://tsch.js.org/ja
*/

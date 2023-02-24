/*
  2852 - OmitByType
  -------
  by jiangshan (@jiangshanmeta) #中級 #object

  ### 質問

  From ```T```, pick a set of properties whose type are not assignable to ```U```.

  For Example

  ```typescript
  type OmitBoolean = OmitByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { name: string; count: number }
  ```

  > GitHubで確認する：https://tsch.js.org/2852/ja
*/

/* _____________ ここにコードを記入 _____________ */

type OmitByType<T, U> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
  Expect<Equal<OmitByType<Model, string>, { count: number; isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<OmitByType<Model, number>, { name: string; isReadonly: boolean; isEnable: boolean }>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/2852/answer/ja
  > 解答を見る：https://tsch.js.org/2852/solutions
  > その他の課題：https://tsch.js.org/ja
*/

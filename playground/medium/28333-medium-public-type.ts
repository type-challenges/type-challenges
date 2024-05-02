/*
  28333 - Public Type
  -------
  by KaiKai (@kaikaibenkai) #中級 #object-keys

  ### 質問

  Remove the key starting with `_` from given type `T`.

  > GitHubで確認する：https://tsch.js.org/28333/ja
*/

/* _____________ ここにコードを記入 _____________ */

type PublicType<T extends object> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<PublicType<{ a: number }>, { a: number }>>,
  Expect<Equal<PublicType<{ _b: string | bigint }>, {}>>,
  Expect<Equal<PublicType<{ readonly c?: number }>, { readonly c?: number }>>,
  Expect<Equal<PublicType<{ d: string, _e: string }>, { d: string }>>,
  Expect<Equal<PublicType<{ _f: () => bigint[] }>, {}>>,
  Expect<Equal<PublicType<{ g: '_g' }>, { g: '_g' }>>,
  Expect<Equal<PublicType<{ __h: number, i: unknown }>, { i: unknown }>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/28333/answer/ja
  > 解答を見る：https://tsch.js.org/28333/solutions
  > その他の課題：https://tsch.js.org/ja
*/

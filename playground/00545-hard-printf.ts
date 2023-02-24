/*
  545 - printf
  -------
  by null (@Bestmain-YS) #上級 #template-literal

  ### 質問

  汎用的な`Format<T extends string>`を実装します。

  例えば、

  ```ts
  type FormatCase1 = Format<'%sabc'>; // FormatCase1 : string => string
  type FormatCase2 = Format<'%s%dabc'>; // FormatCase2 : string => number => string
  type FormatCase3 = Format<'sdabc'>; // FormatCase3 :  string
  type FormatCase4 = Format<'sd%abc'>; // FormatCase4 :  string
  ```

  > GitHubで確認する：https://tsch.js.org/545/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Format<T extends string> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Format<'abc'>, string>>,
  Expect<Equal<Format<'a%sbc'>, (s1: string) => string>>,
  Expect<Equal<Format<'a%dbc'>, (d1: number) => string>>,
  Expect<Equal<Format<'a%%dbc'>, string>>,
  Expect<Equal<Format<'a%%%dbc'>, (d1: number) => string>>,
  Expect<Equal<Format<'a%dbc%s'>, (d1: number) => (s1: string) => string>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/545/answer/ja
  > 解答を見る：https://tsch.js.org/545/solutions
  > その他の課題：https://tsch.js.org/ja
*/

/*
  529 - Absolute
  -------
  by Andrey Krasovsky (@bre30kra69cs) #中級 #math #template-literal

  ### 質問

  srting, number または bigint を受け取り、正の数を出力する `Absolute` 型を実装します。

  例えば

  ```ts
  type Test = -100;
  type Result = Absolute<Test>; // expected to be "100"
  ```

  > GitHubで確認する：https://tsch.js.org/529/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Absolute<T extends number | string | bigint> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Absolute<0>, '0'>>,
  Expect<Equal<Absolute<-0>, '0'>>,
  Expect<Equal<Absolute<10>, '10'>>,
  Expect<Equal<Absolute<-5>, '5'>>,
  Expect<Equal<Absolute<'0'>, '0'>>,
  Expect<Equal<Absolute<'-0'>, '0'>>,
  Expect<Equal<Absolute<'10'>, '10'>>,
  Expect<Equal<Absolute<'-5'>, '5'>>,
  Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
  Expect<Equal<Absolute<9_999n>, '9999'>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/529/answer/ja
  > 解答を見る：https://tsch.js.org/529/solutions
  > その他の課題：https://tsch.js.org/ja
*/

/*
  459 - Flatten
  -------
  by zhouyiming (@chbro) #中級 #array

  ### 質問

  この課題では、受け取った配列をフラット化した型を出力する型を書く必要があります。

  例えば:

  ```ts
  type flatten = Flatten<[1, 2, [3, 4], [[[5]]]> // [1, 2, 3, 4, 5]
  ```

  > GitHubで確認する：https://tsch.js.org/459/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Flatten = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/459/answer/ja
  > 解答を見る：https://tsch.js.org/459/solutions
  > その他の課題：https://tsch.js.org/ja
*/

/*
  21220 - Permutations of Tuple
  -------
  by null (@gaac510) #中級 #union #tuple #conditional type #recursion

  ### 質問

  Given a generic tuple type `T extends unknown[]`, write a type which produces all permutations of `T` as a union.

  For example:

  ```ts
  PermutationsOfTuple<[1, number, unknown]>
  /**
   * Should return:
   * | [1, number, unknown]
   * | [1, unknown, number]
   * | [number, 1, unknown]
   * | [unknown, 1, number]
   * | [number, unknown, 1]
   * | [unknown, number ,1]
   */
  ```

  > GitHubで確認する：https://tsch.js.org/21220/ja
*/

/* _____________ ここにコードを記入 _____________ */

type PermutationsOfTuple<T extends unknown[]> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect, ExpectFalse } from '@type-challenges/utils'

type cases = [
  Expect<Equal<PermutationsOfTuple<[]>, []>>,
  Expect<Equal<PermutationsOfTuple<[any]>, [any]>>,
  Expect<Equal<PermutationsOfTuple<[any, unknown]>, [any, unknown] | [unknown, any]>>,
  Expect<Equal<
    PermutationsOfTuple<[any, unknown, never]>,
    | [any, unknown, never]
    | [unknown, any, never]
    | [unknown, never, any]
    | [any, never, unknown]
    | [never, any, unknown]
    | [never, unknown, any]
  >>,
  Expect<Equal<
    PermutationsOfTuple<[1, number, unknown]>,
    | [1, number, unknown]
    | [1, unknown, number]
    | [number, 1, unknown]
    | [unknown, 1, number]
    | [number, unknown, 1]
    | [unknown, number, 1]
  >>,
  ExpectFalse<Equal<PermutationsOfTuple<[ 1, number, unknown ]>, [unknown]>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/21220/answer/ja
  > 解答を見る：https://tsch.js.org/21220/solutions
  > その他の課題：https://tsch.js.org/ja
*/

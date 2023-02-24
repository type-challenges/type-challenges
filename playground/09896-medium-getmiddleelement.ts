/*
  9896 - GetMiddleElement
  -------
  by 凤之兮原 (@kongmingLatern) #中級

  ### 質問

  Get the middle element of the array by implementing a `GetMiddleElement` method, represented by an array

  > If the length of the array is odd, return the middle element
  > If the length of the array is even, return the middle two elements

  For example

  ```ts
    type simple1 = GetMiddleElement<[1, 2, 3, 4, 5]>, // expected to be [3]
    type simple2 = GetMiddleElement<[1, 2, 3, 4, 5, 6]> // expected to be [3, 4]
  ```

  > GitHubで確認する：https://tsch.js.org/9896/ja
*/

/* _____________ ここにコードを記入 _____________ */

type GetMiddleElement<T> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GetMiddleElement<[]>, []>>,
  Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5]>, [3]>>,
  Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5, 6]>, [3, 4]>>,
  Expect<Equal<GetMiddleElement<[() => string]>, [() => string]>>,
  Expect<Equal<GetMiddleElement<[() => number, '3', [3, 4], 5]>, ['3', [3, 4]]>>,
  Expect<Equal<GetMiddleElement<[() => string, () => number]>, [() => string, () => number]>>,
  Expect<Equal<GetMiddleElement<[never]>, [never]>>,
]
// @ts-expect-error
type error = GetMiddleElement<1, 2, 3>

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/9896/answer/ja
  > 解答を見る：https://tsch.js.org/9896/solutions
  > その他の課題：https://tsch.js.org/ja
*/

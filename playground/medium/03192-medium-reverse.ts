/*
  3192 - Reverse
  -------
  by jiangshan (@jiangshanmeta) #中級 #tuple

  ### 質問

  Implement the type version of ```Array.reverse```

  For example:

  ```typescript
  type a = Reverse<['a', 'b']> // ['b', 'a']
  type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
  ```

  > GitHubで確認する：https://tsch.js.org/3192/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Reverse<T> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
]

type errors = [
  // @ts-expect-error
  Reverse<'string'>,
  // @ts-expect-error
  Reverse<{ key: 'value' }>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/3192/answer/ja
  > 解答を見る：https://tsch.js.org/3192/solutions
  > その他の課題：https://tsch.js.org/ja
*/

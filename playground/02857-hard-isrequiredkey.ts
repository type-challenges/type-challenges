/*
  2857 - IsRequiredKey
  -------
  by jiangshan (@jiangshanmeta) #上級 #utils

  ### 質問

  Implement a generic ```IsRequiredKey<T, K>```  that return whether ```K``` are required keys of ```T``` .

  For example

  ```typescript
  type A = IsRequiredKey<{ a: number, b?: string },'a'> // true
  type B = IsRequiredKey<{ a: number, b?: string },'b'> // false
  type C = IsRequiredKey<{ a: number, b?: string },'b' | 'a'> // false
  ```

  > GitHubで確認する：https://tsch.js.org/2857/ja
*/

/* _____________ ここにコードを記入 _____________ */

type IsRequiredKey<T, K extends keyof T> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'a'>, true>>,
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'b'>, false>>,
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'b' | 'a'>, false>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/2857/answer/ja
  > 解答を見る：https://tsch.js.org/2857/solutions
  > その他の課題：https://tsch.js.org/ja
*/

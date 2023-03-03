/*
  4037 - IsPalindrome
  -------
  by jiangshan (@jiangshanmeta) #上級 #string

  ### 質問

  Implement type ```IsPalindrome<T>``` to check whether  a string or number is palindrome.

  For example:

  ```typescript
  IsPalindrome<'abc'> // false
  IsPalindrome<121> // true
  ```

  > GitHubで確認する：https://tsch.js.org/4037/ja
*/

/* _____________ ここにコードを記入 _____________ */

type IsPalindrome<T> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsPalindrome<'abc'>, false>>,
  Expect<Equal<IsPalindrome<'b'>, true>>,
  Expect<Equal<IsPalindrome<'abca'>, false>>,
  Expect<Equal<IsPalindrome<'abcba'>, true>>,
  Expect<Equal<IsPalindrome<121>, true>>,
  Expect<Equal<IsPalindrome<19260817>, false>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/4037/answer/ja
  > 解答を見る：https://tsch.js.org/4037/solutions
  > その他の課題：https://tsch.js.org/ja
*/

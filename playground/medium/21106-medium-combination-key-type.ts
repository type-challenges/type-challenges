/*
  21106 - Combination key type
  -------
  by Nauxscript (@Nauxscript) #中級

  ### 質問

  1. Combine multiple modifier keys, but the same modifier key combination cannot appear.
  2. In the `ModifierKeys` provided, the priority of the previous value is higher than the latter value; that is, `cmd ctrl` is OK, but `ctrl cmd` is not allowed.

  > GitHubで確認する：https://tsch.js.org/21106/ja
*/

/* _____________ ここにコードを記入 _____________ */

// 实现 Combs
type Combs<T extends any[]> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type ModifierKeys = ['cmd', 'ctrl', 'opt', 'fn']
type CaseTypeOne = 'cmd ctrl' | 'cmd opt' | 'cmd fn' | 'ctrl opt' | 'ctrl fn' | 'opt fn'

type cases = [
  Expect<Equal<Combs<ModifierKeys>, CaseTypeOne>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/21106/answer/ja
  > 解答を見る：https://tsch.js.org/21106/solutions
  > その他の課題：https://tsch.js.org/ja
*/

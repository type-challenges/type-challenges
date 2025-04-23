/*
  21106 - Combination key type
  -------
  by Nauxscript (@Nauxscript) #보통

  ### 질문

  1. Combine multiple modifier keys, but the same modifier key combination cannot appear.
  2. In the `ModifierKeys` provided, the priority of the previous value is higher than the latter value; that is, `cmd ctrl` is OK, but `ctrl cmd` is not allowed.

  > GitHub에서 보기: https://tsch.js.org/21106/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

// 实现 Combs
type Combs<T extends any[]> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type ModifierKeys = ['cmd', 'ctrl', 'opt', 'fn']
type CaseTypeOne = 'cmd ctrl' | 'cmd opt' | 'cmd fn' | 'ctrl opt' | 'ctrl fn' | 'opt fn'

type cases = [
  Expect<Equal<Combs<ModifierKeys>, CaseTypeOne>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/21106/answer/ko
  > 정답 보기: https://tsch.js.org/21106/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

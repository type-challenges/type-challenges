/*
  2595 - PickByType
  -------
  by jiangshan (@jiangshanmeta) #보통 #object

  ### 질문

  From `T`, pick a set of properties whose type are assignable to `U`.

  For Example

  ```typescript
  type OnlyBoolean = PickByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { isReadonly: boolean; isEnable: boolean; }
  ```

  > GitHub에서 보기: https://tsch.js.org/2595/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type PickByType<T, U> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean, isEnable: boolean }>>,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/2595/answer/ko
  > 정답 보기: https://tsch.js.org/2595/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

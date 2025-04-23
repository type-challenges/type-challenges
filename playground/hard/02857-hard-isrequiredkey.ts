/*
  2857 - IsRequiredKey
  -------
  by jiangshan (@jiangshanmeta) #어려움 #utils

  ### 질문

  Implement a generic ```IsRequiredKey<T, K>```  that return whether ```K``` are required keys of ```T``` .

  For example

  ```typescript
  type A = IsRequiredKey<{ a: number, b?: string },'a'> // true
  type B = IsRequiredKey<{ a: number, b?: string },'b'> // false
  type C = IsRequiredKey<{ a: number, b?: string },'b' | 'a'> // false
  ```

  > GitHub에서 보기: https://tsch.js.org/2857/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type IsRequiredKey<T, K extends keyof T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsRequiredKey<{ a: number, b?: string }, 'a'>, true>>,
  Expect<Equal<IsRequiredKey<{ a: undefined, b: string }, 'a'>, true>>,
  Expect<Equal<IsRequiredKey<{ a: number, b?: string }, 'b'>, false>>,
  Expect<Equal<IsRequiredKey<{ a: number, b?: string }, 'b' | 'a'>, false>>,
  Expect<Equal<IsRequiredKey<{ a: undefined, b: undefined }, 'b' | 'a'>, true>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/2857/answer/ko
  > 정답 보기: https://tsch.js.org/2857/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

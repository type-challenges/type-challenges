/*
  9155 - ValidDate
  -------
  by ch3cknull (@ch3cknull) #어려움

  ### 질문

  Implement a type `ValidDate`, which takes an input type T and returns whether T is a valid date.

  **Leap year is not considered**

  Good Luck!

  ```ts
  ValidDate<'0102'> // true
  ValidDate<'0131'> // true
  ValidDate<'1231'> // true
  ValidDate<'0229'> // false
  ValidDate<'0100'> // false
  ValidDate<'0132'> // false
  ValidDate<'1301'> // false
  ```

  > GitHub에서 보기: https://tsch.js.org/9155/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type ValidDate<T extends string> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ValidDate<'0102'>, true>>,
  Expect<Equal<ValidDate<'0131'>, true>>,
  Expect<Equal<ValidDate<'1231'>, true>>,
  Expect<Equal<ValidDate<'0229'>, false>>,
  Expect<Equal<ValidDate<'0100'>, false>>,
  Expect<Equal<ValidDate<'0132'>, false>>,
  Expect<Equal<ValidDate<'1301'>, false>>,
  Expect<Equal<ValidDate<'0123'>, true>>,
  Expect<Equal<ValidDate<'0430'>, true>>,
  Expect<Equal<ValidDate<'01234'>, false>>,
  Expect<Equal<ValidDate<''>, false>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/9155/answer/ko
  > 정답 보기: https://tsch.js.org/9155/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

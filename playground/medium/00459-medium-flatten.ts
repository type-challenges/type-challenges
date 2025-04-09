/*
  459 - Flatten
  -------
  by zhouyiming (@chbro) #보통 #array

  ### 질문

  주어진 배열을 플랫한 배열 타입으로 바꾸는 Flatten 타입을 구현하세요.

  예시:

  ```ts
  type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
  ```

  > GitHub에서 보기: https://tsch.js.org/459/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Flatten = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{ foo: 'bar', 2: 10 }, 'foobar']>, [{ foo: 'bar', 2: 10 }, 'foobar']>>,
]

// @ts-expect-error
type error = Flatten<'1'>

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/459/answer/ko
  > 정답 보기: https://tsch.js.org/459/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

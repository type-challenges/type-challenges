/*
  7544 - Construct Tuple
  -------
  by Lo (@LoTwT) #보통 #tuple

  ### 질문

  Construct a tuple with a given length.

  For example

  ```ts
  type result = ConstructTuple<2> // expect to be [unknown, unkonwn]
  ```

  > GitHub에서 보기: https://tsch.js.org/7544/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type ConstructTuple<L extends number> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>['length'], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>['length'], 1000>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/7544/answer/ko
  > 정답 보기: https://tsch.js.org/7544/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

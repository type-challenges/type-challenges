/*
  4471 - Zip
  -------
  by キリサメ qianxi (@qianxi0410) #보통 #tuple

  ### 질문

  In This Challenge, You should implement a type `Zip<T, U>`, T and U must be `Tuple`
  ```ts
  type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
  ```

  > GitHub에서 보기: https://tsch.js.org/4471/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Zip<T, U> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/4471/answer/ko
  > 정답 보기: https://tsch.js.org/4471/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

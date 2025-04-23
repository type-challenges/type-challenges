/*
  106 - Trim Left
  -------
  by Anthony Fu (@antfu) #보통 #template-literal

  ### 질문

  정확한 문자열 타입이고 시작 부분의 공백이 제거된 새 문자열을 반환하는 `TrimLeft<T>`를 구현하십시오.

  예시

  ```ts
  type trimed = TrimLeft<'  Hello World  '> // 기대되는 결과는 'Hello World  '입니다.
  ```

  > GitHub에서 보기: https://tsch.js.org/106/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type TrimLeft<S extends string> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/106/answer/ko
  > 정답 보기: https://tsch.js.org/106/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

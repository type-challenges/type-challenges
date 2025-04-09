/*
  108 - Trim
  -------
  by Anthony Fu (@antfu) #보통 #template-literal

  ### 질문

  정확한 문자열 타입이고 양쪽 끝의 공백이 제거된 새 문자열을 반환하는 `Trim<T>`를 구현하십시오.

  예시

  ```ts
  type trimmed = Trim<'  Hello World  '> // 기대되는 결과는 'Hello World'입니다.
  ```

  > GitHub에서 보기: https://tsch.js.org/108/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Trim<S extends string> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/108/answer/ko
  > 정답 보기: https://tsch.js.org/108/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

/*
  28333 - Public Type
  -------
  by KaiKai (@kaikaibenkai) #보통 #object-keys

  ### 질문

  Remove the key starting with `_` from given type `T`.

  > GitHub에서 보기: https://tsch.js.org/28333/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type PublicType<T extends object> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<PublicType<{ a: number }>, { a: number }>>,
  Expect<Equal<PublicType<{ _b: string | bigint }>, {}>>,
  Expect<Equal<PublicType<{ readonly c?: number }>, { readonly c?: number }>>,
  Expect<Equal<PublicType<{ d: string, _e: string }>, { d: string }>>,
  Expect<Equal<PublicType<{ _f: () => bigint[] }>, {}>>,
  Expect<Equal<PublicType<{ g: '_g' }>, { g: '_g' }>>,
  Expect<Equal<PublicType<{ __h: number, i: unknown }>, { i: unknown }>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/28333/answer/ko
  > 정답 보기: https://tsch.js.org/28333/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

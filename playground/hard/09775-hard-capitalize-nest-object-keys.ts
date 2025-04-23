/*
  9775 - Capitalize Nest Object Keys
  -------
  by MayanDev (@Mayandev) #어려움 #object #array

  ### 질문

  Capitalize the key of the object, and if the value is an array, iterate through the objects in the array.

  > GitHub에서 보기: https://tsch.js.org/9775/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type CapitalizeNestObjectKeys<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type foo = {
  foo: string
  bars: [{ foo: string }]
}

type Foo = {
  Foo: string
  Bars: [{
    Foo: string
  }]
}

type cases = [
  Expect<Equal<Foo, CapitalizeNestObjectKeys<foo>>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/9775/answer/ko
  > 정답 보기: https://tsch.js.org/9775/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

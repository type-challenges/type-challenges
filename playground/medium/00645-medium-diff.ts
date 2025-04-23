/*
  645 - Diff
  -------
  by ZYSzys (@ZYSzys) #보통 #object

  ### 질문

  `O` & `O1`의 차이점인 `객체`를 가져옵니다

  > GitHub에서 보기: https://tsch.js.org/645/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Diff<O, O1> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string, gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string, gender: number }>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/645/answer/ko
  > 정답 보기: https://tsch.js.org/645/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

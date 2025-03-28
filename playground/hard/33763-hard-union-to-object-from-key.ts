/*
  33763 - Union to Object from key
  -------
  by clen cat (@a145789) #어려움

  ### 질문

  Find the object containing the key in the union type by the key. It  takes two parameters: a union of object types and a key name.

  > GitHub에서 보기: https://tsch.js.org/33763/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type UnionToObjectFromKey<Union, Key> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  foo: string
  common: boolean
}

type Bar = {
  bar: number
  common: boolean
}

type Other = {
  other: string
}

type cases = [
  Expect<Equal<UnionToObjectFromKey<Foo | Bar, 'foo'>, Foo>>,
  Expect<Equal<UnionToObjectFromKey<Foo | Bar, 'common'>, {
    foo: string
    common: boolean
  } | {
    bar: number
    common: boolean
  }>>,
  Expect<Equal<UnionToObjectFromKey<Foo | Bar | Other, 'common'>, {
    foo: string
    common: boolean
  } | {
    bar: number
    common: boolean
  }>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/33763/answer/ko
  > 정답 보기: https://tsch.js.org/33763/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

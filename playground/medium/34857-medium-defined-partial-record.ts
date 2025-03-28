/*
  34857 - Defined Partial Record
  -------
  by Aleksandr Trutanov (@alex-altay) #보통

  ### 질문

  ### Defined Partial Record


  Using a Record with union types as keys doesn't allow you to make an object with only some of them

  ```ts
  const record: Record<'a' | 'b' | 'c', number> = { a: 42, b: 10 }
  // error: Property 'c' is missing in type '{ a: number; b: number; }'
  // but required in type 'Record<"a" | "b" | "c", number>'
  ```

  Using a Partial Record with union types as keys allows you to make an object without all union members, but makes all keys and values optional, potentially leaving them undefined

  ```ts
  const partial: Partial<Record<'a' | 'b' | 'c', number>> = { a: 42 }
  const partialType = typeof partial // { a?: number | undefined, b? : number | undefined, c? : number | undefined }
  const operation = 0 + partial.a // error: 'partial.a' is possibly 'undefined'
  const access = partial.c // possible, type doesn't know that there is no such key
  ```

  You need to make a type that takes the best of both worlds, creates all combinations of all the types in the union, so using a key that exists in the object gives you a defined type, but using a key that exists in the union and not in the object throws an error
  ```ts
  const best: DefinedPartial<Record<'a' | 'b' | 'c', number>> = { a: 42 }
  const sum = 0 + best.a // 42
  const error = best.b // error: property 'b' does not exist on type '{ a: number; }'
  ```

  > GitHub에서 보기: https://tsch.js.org/34857/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type DefinedPartial<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect, ExpectTrue, NotAny, NotEqual } from '@type-challenges/utils'

type A1 = Record<'a' | 'b', string>
type E1 = { a: string } |
  { b: string } |
  { a: string, b: string }
type D1 = DefinedPartial<A1>
type C1 = Expect<Equal<D1, E1>>

type A2 = Record<'a' | 'b' | 'c', string>
type E2 = { a: string } |
  { b: string } |
  { c: string } |
  { a: string, b: string } |
  { a: string, c: string } |
  { b: string, c: string } |
  { a: string, b: string, c: string }
type D2 = DefinedPartial<A2>
type C2 = Expect<Equal<D2, E2>>

type A3 = Record<'a', number>
type E3 = { a: number }
type D3 = DefinedPartial<A3>
type C3 = Expect<Equal<D3, E3>>

type A4 = Record<'a', number>
type E4 = { a: string }
type D4 = DefinedPartial<A4>
type C4 = ExpectTrue<NotAny<D4> | NotEqual<D4, E4>>

type A5 = Record<'a' | 'c', number>
type E5 = { a: string, b: string }
type D5 = DefinedPartial<A5>
type C5 = ExpectTrue<NotAny<D5> | NotEqual<D5, E5>>

type A6 = { a: string, b: string }
type E6 = { a: string } |
  { b: string } |
  { a: string, b: string }
type D6 = DefinedPartial<A6>
type C6 = Expect<Equal<D6, E6>>

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/34857/answer/ko
  > 정답 보기: https://tsch.js.org/34857/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

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

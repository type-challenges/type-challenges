import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyEqual<string, string>, true>>,
  Expect<Equal<MyEqual<42, 42>, true>>,
  Expect<Equal<MyEqual<true, true>, true>>,
  Expect<Equal<MyEqual<{ a: number }, { a: number }>, true>>,
  Expect<Equal<MyEqual<{ a: number; b: string }, { b: string; a: number }>, true>>,
  Expect<Equal<MyEqual<string[], string[]>, true>>,
  Expect<Equal<MyEqual<[number, string], [number, string]>, true>>,
  Expect<Equal<MyEqual<() => void, () => void>, true>>,
  Expect<Equal<MyEqual<(x: number) => string, (y: number) => string>, true>>,
  Expect<Equal<MyEqual<'a' | 'b', 'b' | 'a'>, true>>,
  Expect<Equal<MyEqual<number | string, string | number>, true>>,
  Expect<Equal<MyEqual<string, number>, false>>,
  Expect<Equal<MyEqual<true, false>, false>>,
  Expect<Equal<MyEqual<{ a: number }, { a: string }>, false>>,
  Expect<Equal<MyEqual<{ a: number }, { a: number; b: string }>, false>>,
  Expect<Equal<MyEqual<[number], number[]>, false>>,
  Expect<Equal<MyEqual<() => void, () => string>, false>>,
  Expect<Equal<MyEqual<(x: number) => string, (x: string) => string>, false>>,
  Expect<Equal<MyEqual<'a' | 'b', 'a' | 'c'>, false>>,
  Expect<Equal<MyEqual<number | string, number | boolean>, false>>
]

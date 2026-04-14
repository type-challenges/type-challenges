import type { Equal, Expect } from '@type-challenges/utils'

type F1 = (a: string, b: number, c: boolean) => void
type F2 = (x: Date) => string

type cases = [
  // Replace 0th argument
  Expect<Equal<
    OverwriteArg<F1, 0, Date>,
    (a: Date, b: number, c: boolean) => void
  >>,
  // Replace 1st argument
  Expect<Equal<
    OverwriteArg<F1, 1, string[]>,
    (a: string, b: string[], c: boolean) => void
  >>,
  // Replace 2nd argument
  Expect<Equal<
    OverwriteArg<F1, 2, null>,
    (a: string, b: number, c: null) => void
  >>,
  // Single-argument function
  Expect<Equal<
    OverwriteArg<F2, 0, number>,
    (x: number) => string
  >>,
  // Return type must remain unchanged
  Expect<Equal<
    OverwriteArg<F1, 0, never>,
    (a: never, b: number, c: boolean) => void
  >>,
]

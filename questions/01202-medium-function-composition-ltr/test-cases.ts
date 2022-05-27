import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Compose<[(x: number) => string, (y: string) => boolean]>, (x: number) => boolean>,
  Expect<NotEqual<Compose<[(x: boolean) => number, (y: string) => boolean]>, (y: string) => number>>,
  Expect<NotEqual<Compose<[(x: number) => string, (y: number) => number, (z: number) => boolean]>, (x: number) => boolean>,
  Expect<Equal<Compose<[(x: number) => string, (y: string) => number, (z: number) => boolean]>, (x: number) => boolean>,
  Expect<Equal<Compose<[(x: 0) => false]>, (x: 0) => false>,
  Expect<NotEqual<Compose<[(x: 0) => false, (y: boolean) => 10]>, (x: 0) => 10>>,
]

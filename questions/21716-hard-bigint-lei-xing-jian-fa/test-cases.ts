import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BigIntSubed<0n, 1n>, -1n>>,
  Expect<Equal<BigIntSubed<3141592653589793238462n, 8888888888888888n>, 3141583764700904349574n>>,
  Expect<Equal<BigIntSubed<1234567890987654321n, -684426164679554915n>, 1918994055667209236n>>,
  Expect<Equal<BigIntSubed<-177155n, 5211314n>, -5388469n>>,
  Expect<Equal<BigIntSubed<-7355608n, -1597463174n>, 1590107566n>>,
  Expect<Equal<BigIntSubed<bigint, 0n>, bigint>>
]

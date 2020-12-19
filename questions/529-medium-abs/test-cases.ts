import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Abs<0>, "0">>,
  Expect<Equal<Abs<-0>, "0">>,
  Expect<Equal<Abs<10>, "10">>,
  Expect<Equal<Abs<-5>, "5">>,
  Expect<Equal<Abs<"0">, "0">>,
  Expect<Equal<Abs<"-0">, "0">>,
  Expect<Equal<Abs<"10">, "10">>,
  Expect<Equal<Abs<"-5">, "5">>,
  Expect<Equal<Abs<-1_000_000n>, "1000000">>,
  Expect<Equal<Abs<9_999n>, "9999">>,
]

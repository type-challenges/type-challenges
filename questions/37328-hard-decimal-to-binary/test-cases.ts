import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<DecimalToBinary<2>, "10">>,
  Expect<Equal<DecimalToBinary<3>, "11">>,
  Expect<Equal<DecimalToBinary<0>, "0">>,
  Expect<Equal<DecimalToBinary<255>, "11111111">>,
  Expect<Equal<DecimalToBinary<-170>, '-10101010'>>,
  Expect<Equal<DecimalToBinary<10000>, "10011100010000">>,
  Expect<Equal<DecimalToBinary<9007199254740991>, "11111111111111111111111111111111111111111111111111111">>,
  Expect<Equal<DecimalToBinary<-9007199254740991>, "-11111111111111111111111111111111111111111111111111111">>,
]

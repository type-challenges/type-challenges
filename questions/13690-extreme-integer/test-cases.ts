import type { Equal, Expect, ExpectFalse } from '@type-challenges/utils'

type cases = [
  // 1 + 1 = 2
  Expect<Equal<Add<1, 1>, 2>>,

  // 1 + (-1) = 0
  Expect<Equal<Add<1, -1>, 0>>,

  // 1 - 2 = -1
  Expect<Equal<Minus<1, 2>, -1>>,

  // 6e10 - 5e10 = 1e10
  Expect<Equal<Minus<6e10, 5e10>, 1e10>>,

  // 3e10 + 5e10 = 8e10
  Expect<Equal<Add<3e10, 5e10>, 8e10>>,

  // -(123) = -123
  Expect<Equal<Negative<123>, -123>>,

  // -9e80 is negative
  Expect<IsNegative<-9e80>>,
  
  // 9e80 is not negative
  ExpectFalse<IsNegative<9e80>>,

  // -(9e80) = -9e80, it is negative
  Expect<IsNegative<Negative<9e80>>>,

  // abs(1) = 1
  Expect<Equal<Abs<1>, 1>>,

  // abs(-1) = 1
  Expect<Equal<Abs<-1>, 1>>,

  // max(10, -1000) = 10
  Expect<Equal<Max<10, -1000>, 10>>,

  // min(-1000, -2000) = -2000
  Expect<Equal<Min<-1000, -2000>, -2000>>,

  // -1000 > -2000
  Expect<Gt<-1000, -2000>>,

  // -8e5 > 1, false
  ExpectFalse<Gt<-8e5, 1>>,

  // -100 >= -100
  Expect<GtE<-100, -100>>,

  // -100 >= -101
  Expect<GtE<-100, -101>>,

  // -100 >= -99, false
  ExpectFalse<GtE<-100, -99>>,

  // 1000 < 2000
  Expect<Lt<1000, 2000>>,

  // 8e5 < 1, false
  ExpectFalse<Lt<8e5, 1>>,

  // -100 <= -100
  Expect<LtE<-100, -100>>,

  // -101 <= -100
  Expect<LtE<-101, -100>>,

  // -99 <= -100, false
  ExpectFalse<LtE<-99, -100>>,

  // 100 == 100
  Expect<Eq<100, 100>>,

  // 100 == 200, false
  ExpectFalse<Eq<100, 200>>,

  // 100 != 200
  Expect<Neq<100, 200>>,

  // 100 != 100, false
  ExpectFalse<Neq<100, 100>>,

  // cmp(10, 11) = L [ 10 < 11 ]
  Expect<Equal<Compare<10, 11>, Cmp.L>>,

  // cmp(20, 10) = G [ 20 > 10 ]
  Expect<Equal<Compare<20, 10>, Cmp.G>>,

  // cmp(-100, -100) = E [ -100 == -100 ]
  Expect<Equal<Compare<-100, -100>, Cmp.E>>
]

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
Expect<Equal<Divide<15, 6>,[2,3]>>,
Expect<Equal<Divide<18864543, 67843>,[278,4189]>>,
Expect<Equal<Divide<1234567890, 54321>,[22727, 14523]>>,
Expect<Equal<Divide<1234567890123499, 3>,[411522630041166, 1]>>,
Expect<Equal<Divide<9007199254740991, 200346>,[44958218555, 120961]>>,//Number.MAX_SAFE_INTEGER = 9007199254740991
Expect<Equal<Divide<-9007199254740991, -77786731>,[115793518, -18531333]>>,
Expect<Equal<Divide<-9007199254740991, 77786731>,[-115793518, -18531333]>>,
Expect<Equal<Divide<9007199254740991, -77786731>,[-115793518, 18531333]>>,
Expect<Equal< Divide<-999, 0>,never>>,
Expect<Equal< Divide<0, 1>,[0,0]>>,


]

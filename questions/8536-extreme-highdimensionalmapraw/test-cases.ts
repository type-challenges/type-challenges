import { Equal, Expect, ExpectFalse, NotEqual,ExpectExtends } from '@type-challenges/utils'

type cases = [
  Expect<Equal<HighDimensionalMapRaw<number,number, 4> , Map<number,Map<number,Map<number,Map<number,number>>>>>>,
   Expect<Equal< Map<number,Map<number,Map<number,Map<number,number>>>>,HighDimensionalMapRaw<number,number, 4> >>,

Expect<Equal<HighDimensionalMapRaw<number,number, 3> , Map<number,Map<number,Map<number,number>>>>>,
   Expect<Equal< Map<number,Map<number,Map<number,Map<number,Map<number,number>>>>>,HighDimensionalMapRaw<number,number, 5> >>,


]

import { Equal, Expect, ExpectFalse, NotEqual,ExpectExtends } from '@type-challenges/utils'

type cases = [
  Expect<ExpectExtends<ArrayOfLength<number, 4> , [number, number, number, number]>>,
  Expect<ExpectExtends<[number, number, number, number],ArrayOfLength<number, 4>  >>,
Expect<ExpectExtends<ArrayOfLength<number, 3> , [number, number, number]>>,
  Expect<ExpectExtends<[number, number, number],ArrayOfLength<number, 3>  >>
]

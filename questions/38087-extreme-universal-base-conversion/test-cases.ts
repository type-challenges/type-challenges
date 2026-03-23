import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Convert<10, 9, '10'>, '11'>>,
  Expect<Equal<Convert<3, 2, '21'>, '111'>>,
  Expect<Equal<Convert<5, 10, '100'>, '25'>>,
  Expect<Equal<Convert<10, 2, '128'>, '10000000'>>,
  Expect<Equal<Convert<10, 2, '255'>, '11111111'>>,
  Expect<Equal<Convert<10, 16, '256'>, '100'>>,
  Expect<Equal<Convert<10, 16, '1000'>, '3e8'>>,
  Expect<Equal<Convert<16, 10, '100'>, '256'>>,
  Expect<Equal<Convert<16, 10, '3e8'>, '1000'>>,
  Expect<Equal<Convert<16, 2, 'ff'>, '11111111'>>,
  Expect<Equal<Convert<16, 2, '100'>, '100000000'>>,
  Expect<Equal<Convert<8, 2, '377'>, '11111111'>>, 
  Expect<Equal<Convert<10, 2, '1024'>, '10000000000'>>,
  Expect<Equal<Convert<16, 10, '7ff'>, '2047'>>,
  Expect<Equal<Convert<10, 16, '4096'>, '1000'>>,
]

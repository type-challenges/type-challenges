import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Convert<'Content-Type', '-', '_'>, 'Content_Type'>>,
  Expect<Equal<Convert<'Content-Type', 'x', 'y'>, 'Content-Type'>>,
  Expect<Equal<Convert<'Access-Control-Allow-Origin', '-', '_'>, 'Access_Control_Allow_Origin'>>,
]

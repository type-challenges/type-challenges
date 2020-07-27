import { Equal, Expect, NotEqual, IsAny, ExpectFalse } from './index'

type cases = [
  /* Expect */
  Expect<true>,
  // @ts-expect-error
  Expect<false>,

  /* ExpectFalse */
  ExpectFalse<false>,
  // @ts-expect-error
  ExpectFalse<true>,

  /* Equal */
  Expect<Equal<true, true>>,
  ExpectFalse<Equal<false, true>>,
  Expect<Equal<'123', '123'>>,
  ExpectFalse<Equal<'123', string>>,

  /* Not Equal */
  Expect<NotEqual<false, true>>,
  ExpectFalse<NotEqual<true, true>>,

  /* IsAny */
  Expect<IsAny<any>>,
  ExpectFalse<IsAny<1>>,
]

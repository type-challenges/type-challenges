import type { Alike, Equal, Expect, ExpectFalse, IsAny, NotEqual } from './index'

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
  Expect<Equal<{ a: number }, { a: number }>>,
  ExpectFalse<Equal<{ a: number }, { b: number }>>,

  /* Not Equal */
  Expect<NotEqual<false, true>>,
  ExpectFalse<NotEqual<true, true>>,

  /* IsAny */
  Expect<IsAny<any>>,
  ExpectFalse<IsAny<1>>,

  /* Alike */
  Expect<Alike<{ a: 1 } & { b: 2 }, { a: 1; b: 2 }>>,
  ExpectFalse<Equal<{ a: 1 } & { b: 2 }, { a: 1; b: 2 }>>,
]

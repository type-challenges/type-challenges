import { Equal, Expect, NotEqual } from './index'

type cases = [
  Expect<Equal<true, true>>,

  // @ts-expect-error
  Expect<Equal<false, true>>,

  Expect<NotEqual<false, true>>,

  // @ts-expect-error
  Expect<NotEqual<true, true>>,

  Expect<Equal<'123', '123'>>,

  // @ts-expect-error
  Expect<Equal<'123', string>>,
]

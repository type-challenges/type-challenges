import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Printf<'%s %s', ['Hello', 'World']>, 'Hello World'>>,
  Expect<Equal<Printf<'%s %d %s %b', ['All', 3, 'types', true]>, 'All 3 types true'>>,
  Expect<Equal<Printf<'Invalid', [true]>, never>>,
  Expect<Equal<Printf<'Invalid %b', []>, never>>,
  Expect<Equal<Printf<'Bad Order %d %s %b', [true, 1, 's']>, never>>,
  Expect<Equal<Printf<'Valid %%%b', [true]>, 'Valid %true'>>,
  Expect<Equal<Printf<'Convoluted %d%d%%%d%%%d %d', [1,2,3,4,5]>, 'Convoluted 12%3%4 5'>>,
  Expect<Equal<Printf<'Seems Wrong %%s %%d %%b', []>, 'Seems Wrong %s %d %b'>>,
  Expect<Equal<Printf<'Nothing happens %s %s %s', ['%s', '%s', '%s']>, 'Nothing happens %s %s %s'>>,
]

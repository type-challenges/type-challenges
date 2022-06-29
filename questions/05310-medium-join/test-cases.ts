import type { Equal, Expect } from '@type-challenges/utils'

type Join<T, U extends string | number> = T extends [infer First extends string, ...infer Rest]
  ? `${First}${Rest extends [] ? "" : U}${Join<Rest, U>}`
  : "";

type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>,
]

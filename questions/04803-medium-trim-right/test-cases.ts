import type { Equal, Expect } from '@type-challenges/utils';

type Empty = '\n' | '\t' | ' ';

type TrimRight<S extends string> = S extends `${infer F}${Empty}`
  ? TrimRight<F>
  : S;

type cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
  Expect<Equal<TrimRight<''>, ''>>,
  Expect<Equal<TrimRight<'\n\t '>, ''>>,
];

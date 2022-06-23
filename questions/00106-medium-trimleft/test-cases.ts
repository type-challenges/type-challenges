import { Equal, Expect } from '@type-challenges/utils';

type empty = ' ' | '\n' | '\t';

type TrimLeft<S extends string> = S extends `${empty}${infer L}`
  ? TrimLeft<L>
  : S;

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
];

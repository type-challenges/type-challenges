import { Equal, Expect } from '@type-challenges/utils';

type empty = ' ' | '\n' | '\t';

type Trim<S extends string> = S extends
  | `${empty}${infer L}`
  | `${infer L}${empty}`
  ? Trim<L>
  : S;

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
];

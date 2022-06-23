import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils';

type Reverse<T> = T extends [...infer F, infer L] ? [L, ...Reverse<F>] : T;

type cases = [
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
];

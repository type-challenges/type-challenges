import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils';

type EndsWith<T extends string, U extends string> = T extends `${infer R}${U}`
  ? true
  : false;

type cases = [
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'd'>, false>>,
];

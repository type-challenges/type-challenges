import { Equal, Expect } from '@type-challenges/utils';

type Replace<S extends string, From extends string, To extends string> =
  From extends ''
    ? S
    : S extends `${From}${infer L}`
    ? `${To}${L}`
    : S extends `${infer F}${infer R}`
    ? `${F}${Replace<R, From, To>}`
    : S;

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
];

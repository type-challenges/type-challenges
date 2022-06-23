import { Equal, Expect } from '@type-challenges/utils';

type LengthOfString<S extends string, R extends string[] = []> =
  S extends `${infer F}${infer L}` ? LengthOfString<L, [...R, F]> : R['length'];

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
];

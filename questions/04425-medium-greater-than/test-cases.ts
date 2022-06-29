import type { Equal, Expect } from '@type-challenges/utils';

type ArrayOfLength<N, R extends number[] = []> = R['length'] extends N
  ? R
  : ArrayOfLength<N, [...R, 0]>;

type GreaterThan<
  T extends number,
  U extends number,
  TL = ArrayOfLength<T>,
  UL = ArrayOfLength<U>,
> = TL extends [infer F, ...infer L]
  ? UL extends [infer Uf, ...infer Ur]
    ? GreaterThan<T, U, L, Ur>
    : true
  : false;

type GreaterThan2<
  T extends number,
  U extends number,
  P extends unknown[] = [],
> = P['length'] extends T
  ? false
  : P['length'] extends U
  ? true
  : GreaterThan<T, U, ['', ...P]>;

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
];

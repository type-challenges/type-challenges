import type { Equal, Expect } from '@type-challenges/utils';

type IsEqual<T, U> = [T] extends [U] ? ([U] extends [T] ? true : false) : false;

type Includes<T, U> = U extends [infer F, ...infer L]
  ? IsEqual<F, T> extends true
    ? true
    : Includes<T, L>
  : false;

type Unique<T> = T extends [...infer F, infer R]
  ? Includes<R, F> extends true
    ? Unique<F>
    : [...Unique<F>, R]
  : T;

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<
    Equal<
      Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>,
      [string, number, 1, 'a', 2, 'b']
    >
  >,
  Expect<
    Equal<
      Unique<[unknown, unknown, any, any, never, never]>,
      [unknown, any, never]
    >
  >,
];

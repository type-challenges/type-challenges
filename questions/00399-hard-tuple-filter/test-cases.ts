import type { Equal, Expect } from '@type-challenges/utils';

type Includes<T, K> = [T] extends [K] ? true : false;

type FilterOut<T extends unknown[], F, R extends unknown[] = []> = T extends [
  infer First,
  ...infer L
]
  ? Includes<First, F> extends true
    ? FilterOut<L, F, R>
    : FilterOut<L, F, [...R, First]>
  : R;

type cases = [
  Expect<Equal<FilterOut<[], never>, []>>,
  Expect<Equal<FilterOut<[never], never>, []>>,
  Expect<Equal<FilterOut<['a', never], never>, ['a']>>,
  Expect<Equal<FilterOut<[1, never, 'a'], never>, [1, 'a']>>,
  Expect<
    Equal<
      FilterOut<
        [never, 1, 'a', undefined, false, null],
        never | null | undefined
      >,
      [1, 'a', false]
    >
  >,
  Expect<
    Equal<
      FilterOut<[number | null | undefined, never], never | null | undefined>,
      [number | null | undefined]
    >
  >,
];

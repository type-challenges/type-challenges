import type { Equal, Expect } from '@type-challenges/utils';

type Subsequence<T> = T extends [infer F, ...infer R]
  ? Subsequence<R> | [F, ...Subsequence<R>]
  : T;

type cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<
    Equal<
      Subsequence<[1, 2, 3]>,
      [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3]
    >
  >,
];

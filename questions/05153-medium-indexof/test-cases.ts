import type { Equal, Expect } from '@type-challenges/utils';

type IsEqual<T, U> = T extends U ? (U extends T ? true : false) : false;

type IndexOf<T, U, C extends number[] = []> = T extends [infer F, ...infer L]
  ? IsEqual<U, F> extends true
    ? C['length']
    : IndexOf<L, U, [...C, 1]>
  : -1;

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>,
];

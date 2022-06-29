import type { Equal, Expect } from '@type-challenges/utils';

type IsEqual<T, U> = T extends U ? (U extends T ? true : false) : false;

type Includes<T, U> = U extends [infer F, ...infer L]
  ? F extends T
    ? true
    : Includes<T, L>
  : U extends T
  ? true
  : false;

type Without<T, U> = T extends [infer F, ...infer L]
  ? Includes<F, U> extends true
    ? Without<L, U>
    : [F, ...Without<L, U>]
  : T;

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
];

import type { Equal, Expect } from '@type-challenges/utils';

type IsEqual<T, U> = T extends U ? (U extends T ? true : false) : false;

type LastIndexOf<T, U> = T extends [...infer F, infer L]
  ? IsEqual<L, U> extends true
    ? F['length']
    : LastIndexOf<F, U>
  : -1;
type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<LastIndexOf<[string, 2, number, 'a', number, 1], number>, 4>>,
  Expect<Equal<LastIndexOf<[string, any, 1, number, 'a', any, 1], any>, 5>>,
];

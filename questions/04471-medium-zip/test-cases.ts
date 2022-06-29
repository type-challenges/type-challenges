import type { Equal, Expect } from '@type-challenges/utils';

type Zip<T extends any[], U extends any[], Res extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? U extends [infer UF, ...infer UR]
    ? Zip<R, UR, [...Res, [F, UF]]>
    : Res
  : Res;

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
];

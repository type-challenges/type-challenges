import type { Equal, Expect } from '@type-challenges/utils';

type Chunk<T extends unknown[], N extends number, C extends unknown[] = []> =
  C['length'] extends N
    ? [C, ...Chunk<T, N, []>]
    : T extends [infer F, ...infer R]
    ? Chunk<R, N, [...C, F]>
    : C['length'] extends 0
    ? []
    : [C];

type cc = Chunk<[1, 2, 3], 1>;
// Chunk<[3], 2, []>
// Chunk<[], 2, [3]>
//

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
];

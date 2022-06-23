import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils';

type FlattenArray<T, Depth = 1, C extends number[] = [0]> = T extends any[]
  ? Depth extends C['length']
    ? T
    : T extends [infer F, ...infer L]
    ? [...FlattenArray<F, Depth, [...C, 0]>, ...FlattenArray<L, Depth, C>]
    : T
  : [T];

type FlattenDepth<T, Depth = 1> = T extends [infer F, ...infer L]
  ? [...FlattenArray<F, Depth>, ...FlattenDepth<L, Depth>]
  : T;

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<
    Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>
  >,
];

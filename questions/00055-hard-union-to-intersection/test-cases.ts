import type { Equal, Expect } from '@type-challenges/utils';

type UnionToIntersection<U> = (
  U extends any ? (arg: U) => any : never
) extends (arg: infer I) => void
  ? I
  : never;

type cases = [
  Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<
    Equal<
      UnionToIntersection<(() => 'foo') | ((i: 42) => true)>,
      (() => 'foo') & ((i: 42) => true)
    >
  >,
];

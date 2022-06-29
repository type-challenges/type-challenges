import type { Equal, Expect } from '@type-challenges/utils';

type FibIteror<
  A extends number[],
  B extends number[],
  COUNT extends number[],
  N extends number,
> = COUNT['length'] extends N
  ? A['length']
  : FibIteror<[...A, ...B], A, [...COUNT, 0], N>;

type Fibonacci<T extends number> = FibIteror<[], [0], [], T>;

type cases = [Expect<Equal<Fibonacci<3>, 2>>, Expect<Equal<Fibonacci<8>, 21>>];

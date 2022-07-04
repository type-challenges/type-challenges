import type { Equal, Expect } from '@type-challenges/utils';

type Curryied<T> = T extends (...args: infer Args) => infer R
  ? Args extends [infer F, ...infer L]
    ? (...args: [F]) => Curryied<(...args: L) => R>
    : R
  : never;

declare function Currying<T>(fn: T): Curryied<T>;

const curried1 = Currying((a: string, b: number, c: boolean) => true);
const curried2 = Currying(
  (
    a: string,
    b: number,
    c: boolean,
    d: boolean,
    e: boolean,
    f: string,
    g: boolean,
  ) => true,
);

type cases = [
  Expect<
    Equal<typeof curried1, (a: string) => (b: number) => (c: boolean) => true>
  >,
  Expect<
    Equal<
      typeof curried2,
      (
        a: string,
      ) => (
        b: number,
      ) => (
        c: boolean,
      ) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
    >
  >,
];

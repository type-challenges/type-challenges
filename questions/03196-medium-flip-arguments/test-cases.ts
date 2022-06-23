import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils';

type Reverse<T> = T extends [...infer F, infer L] ? [L, ...Reverse<F>] : T;

type FlipArguments<T> = T extends (...agrs: infer A) => infer R
  ? (...args: Reverse<A>) => R
  : T;

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<
    Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>
  >,
  Expect<
    Equal<
      FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>,
      (arg0: boolean, arg1: number, arg2: string) => void
    >
  >,
];

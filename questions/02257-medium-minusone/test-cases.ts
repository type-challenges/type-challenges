import { Equal, Expect } from '@type-challenges/utils';

interface Defer<T> {
  next: T;
  value: unknown;
}

interface Result<T> extends Defer<Result<T>> {
  value: T;
}

type Next<T> = T[Extract<'next', keyof T>];

type ArrayOfLength<N extends number, Intermediate extends unknown[] = []> =
  Defer<
    Intermediate['length'] extends N
      ? Intermediate
      : ArrayOfLength<N, [...Intermediate, unknown]>
  >;

type GetNext_10Times<T> = Next<T> extends infer T
  ? Next<T> extends infer T
    ? Next<T> extends infer T
      ? Next<T> extends infer T
        ? Next<T> extends infer T
          ? Next<T> extends infer T
            ? Next<T> extends infer T
              ? Next<T> extends infer T
                ? Next<T> extends infer T
                  ? Next<T>
                  : never
                : never
              : never
            : never
          : never
        : never
      : never
    : never
  : never;

type GetNext_100Times<T> = GetNext_10Times<T> extends infer T
  ? GetNext_10Times<T> extends infer T
    ? GetNext_10Times<T> extends infer T
      ? GetNext_10Times<T> extends infer T
        ? GetNext_10Times<T> extends infer T
          ? GetNext_10Times<T> extends infer T
            ? GetNext_10Times<T> extends infer T
              ? GetNext_10Times<T> extends infer T
                ? GetNext_10Times<T> extends infer T
                  ? GetNext_10Times<T>
                  : never
                : never
              : never
            : never
          : never
        : never
      : never
    : never
  : never;

type GetNext_1000Times<T> = GetNext_100Times<T> extends infer T
  ? GetNext_100Times<T> extends infer T
    ? GetNext_100Times<T> extends infer T
      ? GetNext_100Times<T> extends infer T
        ? GetNext_100Times<T> extends infer T
          ? GetNext_100Times<T> extends infer T
            ? GetNext_100Times<T> extends infer T
              ? GetNext_100Times<T> extends infer T
                ? GetNext_100Times<T> extends infer T
                  ? GetNext_100Times<T>
                  : never
                : never
              : never
            : never
          : never
        : never
      : never
    : never
  : never;

type GetNext_10000Times<T> = GetNext_1000Times<T> extends infer T
  ? GetNext_1000Times<T> extends infer T
    ? GetNext_1000Times<T> extends infer T
      ? GetNext_1000Times<T> extends infer T
        ? GetNext_1000Times<T> extends infer T
          ? GetNext_1000Times<T> extends infer T
            ? GetNext_1000Times<T> extends infer T
              ? GetNext_1000Times<T> extends infer T
                ? GetNext_1000Times<T> extends infer T
                  ? GetNext_1000Times<T>
                  : never
                : never
              : never
            : never
          : never
        : never
      : never
    : never
  : never;

type test1 = MinusOne<99>;
// type test2 = test1['value']['length']

type MinusOne<T extends number> = GetNext_10000Times<ArrayOfLength<T>>;

// type cases = [
//   Expect<Equal<MinusOne<1>, 0>>,
//   Expect<Equal<MinusOne<55>, 54>>,
//   Expect<Equal<MinusOne<3>, 2>>,
//   Expect<Equal<MinusOne<100>, 99>>,
//   Expect<Equal<MinusOne<1999>, 1998>>,
// ];

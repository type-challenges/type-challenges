import type { Equal, Expect } from '@type-challenges/utils';

type ConstructTuple<
  L extends number | string,
  Output extends string = `${L}`,
  Count extends unknown[] = [],
> = Output extends `${infer First}${infer Rest}`
  ? ConstructTuple<L, Rest, N<Count>[keyof N & First]>
  : Count;

type N<T extends unknown[] = []> = {
  '0': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T];
  '1': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown];
  '2': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
  ];
  '3': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
  ];
  '4': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
  ];
  '5': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
  ];
  '6': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
  ];
  '7': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
  ];
  '8': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
  ];
  '9': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
  ];
};

type TNumber = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

type ToNumber<S extends string, Init extends string = S> =
  S extends `${TNumber}${infer R}`
    ? ToNumber<R, Init>
    : S extends ''
    ? ConstructTuple<Init>['length']
    : never;

type cases = [
  Expect<Equal<ToNumber<'0'>, 0>>,
  Expect<Equal<ToNumber<'5'>, 5>>,
  Expect<Equal<ToNumber<'12'>, 12>>,
  Expect<Equal<ToNumber<'27'>, 27>>,
  Expect<Equal<ToNumber<'18@7_$%'>, never>>,
];

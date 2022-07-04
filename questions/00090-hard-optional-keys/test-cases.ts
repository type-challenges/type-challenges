import type { Equal, Expect } from '@type-challenges/utils';

type OptionalKeys<T, P = Partial<T>, K = keyof T> = K extends any
  ? P extends Pick<T, K & keyof T>
    ? K
    : never
  : never;

type cases = [
  Expect<Equal<OptionalKeys<{ a: number; b?: string }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined }>, 'b'>>,
  Expect<
    Equal<
      OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>,
      'b' | 'c' | 'd'
    >
  >,
  Expect<Equal<OptionalKeys<{}>, never>>,
];

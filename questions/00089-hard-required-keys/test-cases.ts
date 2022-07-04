import type { Equal, Expect } from '@type-challenges/utils';

type RequiredKeys<T, P = Partial<T>, K = keyof T> = K extends any
  ? P extends Pick<T, K & keyof T>
    ? never
    : K
  : never;

type cases = [
  Expect<Equal<RequiredKeys<{ a: number; b?: string }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined }>, 'a'>>,
  Expect<
    Equal<
      RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>,
      'a' | 'c' | 'd'
    >
  >,
  Expect<Equal<RequiredKeys<{}>, never>>,
];

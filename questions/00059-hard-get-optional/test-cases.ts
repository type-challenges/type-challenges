import type { Equal, Expect } from '@type-challenges/utils';

type GetOptional<T, P = Partial<T>> = {
  [K in keyof T as P extends Pick<T, K> ? K : never]: T[K];
};

type cases = [
  Expect<Equal<GetOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
  Expect<
    Equal<GetOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>
  >,
];

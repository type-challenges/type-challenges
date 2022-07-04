import type { Equal, Expect } from '@type-challenges/utils';

// your answers
type MyRequired<T> = { [K in keyof T]-?: T[K] };
type GetRequired<T, P extends T = MyRequired<T>> = {
  [key in keyof T as T[key] extends P[key] ? key : never]: T[key];
};

type cases = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<
    Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>
  >,
];

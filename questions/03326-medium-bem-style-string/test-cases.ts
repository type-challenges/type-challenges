import type { Equal, Expect } from '@type-challenges/utils';

type ArrayToUnion<T extends string[]> = T extends [infer F, ...infer L]
  ? T[number]
  : '';

type GetEStyle<E extends string> = E extends ''
  ? ''
  : E extends E
  ? `__${E}`
  : '';

type GetMStyle<M extends string> = M extends ''
  ? ''
  : M extends M
  ? `--${M}`
  : '';

type BEM<
  B extends string,
  E extends string[],
  M extends string[],
  UE extends string = ArrayToUnion<E>,
  UM extends string = ArrayToUnion<M>,
> = `${B}${GetEStyle<UE>}${GetMStyle<UM>}`;

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<
    Equal<
      BEM<'btn', ['price'], ['warning', 'success']>,
      'btn__price--warning' | 'btn__price--success'
    >
  >,
  Expect<
    Equal<
      BEM<'btn', [], ['small', 'medium', 'large']>,
      'btn--small' | 'btn--medium' | 'btn--large'
    >
  >,
];

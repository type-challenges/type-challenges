import { Equal, Expect } from '@type-challenges/utils';

type DropChar<S extends string, C extends string> =
  S extends `${infer prefix}${C}${infer suffix}`
    ? DropChar<`${prefix}${suffix}`, C>
    : S;

type DropChar1<S, C extends string> = S extends `${C}${infer R}`
  ? DropChar<R, C>
  : S extends `${infer F}${infer L}`
  ? `${F}${DropChar<L, C>}`
  : S;

type cases = [
  // @ts-expect-error
  Expect<Equal<DropChar<'butter fly!', ''>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', '!'>, 'butter fly'>>,
  Expect<Equal<DropChar<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
];

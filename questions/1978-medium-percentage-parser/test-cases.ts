import { Equal, Expect } from '@type-challenges/utils';

type Case1 = ['', '', ''];
type Case2 = ['+', '', ''];
type Case3 = ['+', '1', ''];
type Case4 = ['+', '100', '%'];
type Case5 = ['', '10', '%'];
type Case6 = ['-', '99', '%'];

// your answers
type NumberUnion = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

type ParsePercent<T extends string> = T extends `${infer Rest}%`
  ? [Rest, '%']
  : [T, ''];

type PercentageParser<A extends string> =
  A extends `${infer Alpha}${infer Rest}`
    ? Alpha extends NumberUnion
      ? ['', ...ParsePercent<A>]
      : [Alpha, ...ParsePercent<Rest>]
    : ['', '', ''];

type cases = [
  Expect<Equal<PercentageParser<''>, Case1>>,
  Expect<Equal<PercentageParser<'+'>, Case2>>,
  Expect<Equal<PercentageParser<'+1'>, Case3>>,
  Expect<Equal<PercentageParser<'+100%'>, Case4>>,
  Expect<Equal<PercentageParser<'10%'>, Case5>>,
  Expect<Equal<PercentageParser<'-99%'>, Case6>>,
];

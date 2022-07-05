import type { Equal, Expect } from '@type-challenges/utils';

type ParsePrintFormat<S extends string> = S extends `${infer Y}%${infer A}`
  ? A extends `${infer F}${infer R}`
    ? [
        ...(F extends keyof ControlsMap ? [ControlsMap[F]] : []),
        ...ParsePrintFormat<R>
      ]
    : []
  : [];

// ParsePrintFormat<'The result is %%d.'>
// [
//   ...([])
//   ...(ParsePrintFormat<'d.'>)
// ]
//

type cases = [
  Expect<Equal<ParsePrintFormat<''>, []>>,
  Expect<Equal<ParsePrintFormat<'Any string.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %%d.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %%%d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %f.'>, ['float']>>,
  Expect<Equal<ParsePrintFormat<'The result is %h.'>, ['hex']>>,
  Expect<Equal<ParsePrintFormat<'The result is %q.'>, []>>,
  Expect<Equal<ParsePrintFormat<'Hello %s: score is %d.'>, ['string', 'dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %'>, []>>,
];

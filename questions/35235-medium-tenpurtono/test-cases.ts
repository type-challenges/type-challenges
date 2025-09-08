import type { Equal, Expect } from '@type-challenges/utils'

type testcase =
  | Expect<Equal<ApplyTemplate<'', {}>, ''>>
  | Expect<Equal<ApplyTemplate<'${abc}', { abc: 123 }>, '123'>>
  | Expect<Equal<ApplyTemplate<'${abc}', { def: 123 }>, ''>>
  | Expect<Equal<ApplyTemplate<'$${abc}', { abc: 123 }>, '${abc}'>>
  | Expect<Equal<ApplyTemplate<'$${abc}', { def: 123 }>, '${abc}'>>
  | Expect<Equal<ApplyTemplate<'${abc}${def}', { abc: 123; def: 456 }>, '123456'>>
  | Expect<Equal<ApplyTemplate<'${abc}${def}', { abc: 123 }>, '123'>>
  | Expect<Equal<ApplyTemplate<'${abc}${def}', { def: 456 }>, '456'>>
  | Expect<Equal<ApplyTemplate<'${abc${def}', { abc: 123; def: 456 }>, '${abc456'>>
  | Expect<Equal<ApplyTemplate<'${abc}${def', { abc: 123; def: 456 }>, '123${def'>>
  | Expect<Equal<ApplyTemplate<'abc${def}ghi', { def: 123 }>, 'abc123ghi'>>
  | Expect<Equal<ApplyTemplate<'abc${def}${ghi}$${jkl}${mno}', { def: 'DEF'; ghi: 'GHI'; mno: 123 }>, 'abcDEFGHI${jkl}123'>>
  | true;

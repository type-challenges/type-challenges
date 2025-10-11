import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Stringify<1>, '1'>>,
  Expect<Equal<Stringify<'1'>, '"1"'>>,
  Expect<Equal<Stringify<true>, 'true'>>,
  Expect<Equal<Stringify<null>, 'null'>>,
  Expect<Equal<Stringify<undefined>, undefined>>,
  Expect<Equal<Stringify<() => ''>, undefined>>,
  Expect<Equal<Stringify<{}>, '{}'>>,
  Expect<Equal<Stringify<{a: undefined, b: () => '', c: null} & {[K in symbol]: null}>, '{"c":null}'>>,
  Expect<Equal<Stringify<{a: 1, b: 2}>, '{"a":1,"b":2}' | '{"b":2,"a":1}'>>,
  Expect<Equal<Stringify<{0: 'a', 1: 'b'}>, '{"0":"a","1":"b"}'>>,
  Expect<Equal<Stringify<{toJSON: () => 123}>, '123'>>,
  Expect<Equal<Stringify<[undefined, () => '', 1]>, '[null,null,1]'>>,
  Expect<Equal<Stringify<{
    0: [ { toJSON: () => 0 }, [[1]], { outer: { inner: 2 } } ],
    a: 'a',
    b: { bb: false },
    c: undefined
  }>,`{"0":[0,[[1]],{"outer":{"inner":2}}],${'"a":"a","b":{"bb":false}' | '"b":{"bb":false},"a":"a"'}}`>>
]

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<(
    Parse<`
      {
        "a": "b", 
        "b": false, 
        "c": [true, false, "hello", {
          "a": "b", 
          "b": false
        }], 
        "nil": null
      }
    `>
  ), (
    {
      nil: null
      c: [true, false, 'hello', {
        a: 'b'
        b: false
      }]
      b: false
      a: 'b'
    }

  )>>,
  Expect<Equal<Parse<'{}'>, {}>>,

  Expect<Equal<Parse<'[]'>, []>>,

  Expect<Equal<Parse<'[1]'>, never>>,

  Expect<Equal<Parse<'true'>, true>>,

  Expect<Equal<
  Parse<'["Hello", true, false, null]'>,
  ['Hello', true, false, null]
  >>,

  Expect<Equal<
  (
    Parse<`
      {
        "hello\\r\\n\\b\\f": "world"
      }`>
  ), (
    {
      'hello\r\n\b\f': 'world'
    }
  )
  >>,

  Expect<Equal<Parse<'{ 1: "world" }'>, never>>,

  Expect<Equal<Parse<`{ "hello
  
  world": 123 }`>, never>>,
]

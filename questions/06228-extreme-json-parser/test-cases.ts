import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // Unexpected cases
  // Note: If the parser encounters unexpected input, it should return `never`.
  Expect<
    Equal<
      Parse<
        // Symbol
        | '{'
        | '}'
        | ':'
        | ','
        | '['
        | ']'
        | ' '
        | '\t'
        | '\n'
        | '"'
        | '\\'

        // Record
        | '{,}'
        | '{""}'
        | '{"}'
        | '{{{{}}}}'
        | '{}{}'
        | '{} {{}}'
        | '{:}'
        | '{#}'
        | '{}#'
        | '{}:'
        | '{[]}'
        | '{"":}'
        | '{null}'
        | '{false,true}'
        | '{true:false}'

        // List
        | '[,]'
        | '["]'
        | '[['
        | ']]'
        | '[][]'
        | '[,,,,]'
        | '[}]'
        | '[#]'
        | '[]]'
        | '[[]'
        | '[:]'
        | '[{]'
        | ',[]'
        | ',]'

        // String
        | '"'
        | '"\n"'
        | '"\\"'
        | '"\\\\\\"'
        | '\\'
        | '{"foo\n":"bar"}'
        | '{"foo":"bar\n"}'
        | '{"foo\n":"bar\n"}'
        | '["foo\n", "bar"]'
        | '["foo", "bar\n"]'
        | '["foo\n", "bar\n"]'
        | '{"foo":abc"bar"}'

        // Boolean, Null
        | 'true,'
        | 'false,'
        | 'null,'
        | 'TRUE'
        | 'FALSE'
        | 'NULL'
        | 'True'
        | 'False'
        | 'Null'
      >,
      never
    >
  >,

  // Expected cases
  // Basic
  Expect<Equal<Parse<'{}'>, {}>>,
  Expect<Equal<Parse<'[]'>, []>>,
  Expect<Equal<Parse<'true'>, true>>,
  Expect<Equal<Parse<'false'>, false>>,
  Expect<Equal<Parse<'null'>, null>>,
  Expect<Equal<Parse<'""'>, ''>>,

  // String
  Expect<
    Equal<
      Parse<`"Lorem ipsum odor amet, consectetuer adipiscing elit. "`>,
      "Lorem ipsum odor amet, consectetuer adipiscing elit. "
    >
  >,
  Expect<
    Equal<
      Parse<`"\\"\\/\\b\\f\\n\\r\\t\\\\ {}[]:,."`>,
      '"/\b\f\n\r\t\\ {}[]:,.'
    >
  >,

  // Record
  Expect<Equal<Parse<'{}'>, {}>>,
  Expect<Equal<Parse<'{"foo":"bar"}'>, { foo: 'bar' }>>,
  Expect<Equal<Parse<'{"foo":{"foo":"bar"}}'>, { foo: { foo: 'bar' } }>>,
  Expect<
    Equal<
      Parse<'{"foo":[{"foo":"bar"},true,false]}'>,
      { foo: [{ foo: 'bar' }, true, false] }
    >
  >,
  Expect<
    Equal<
      Parse<'\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r{"foo"\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r:\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r"bar"\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r}'>,
      { foo: 'bar' }
    >
  >,
  Expect<
    Equal<
      Parse<'\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r{"foo"\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r:\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r{\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r"foo"\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r:\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r"bar"\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r}\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r}\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r'>,
      { foo: { foo: 'bar' } }
    >
  >,
  Expect<
    Equal<
      Parse<'\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r{"foo"\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r:\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r[\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r{\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r"foo"\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r:\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r"bar"}\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r]\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r}\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r'>,
      { foo: [{ foo: 'bar' }] }
    >
  >,

  // List
  Expect<Equal<Parse<'[]'>, []>>,
  Expect<Equal<Parse<'[{}]'>, [{}]>>,
  Expect<Equal<Parse<'[\n\t\r ]'>, []>>,
  Expect<Equal<Parse<'[true, false, null, ""]'>, [true, false, null, '']>>,
  Expect<
    Equal<
      Parse<'\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r[true,\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r      false\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r      ,\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r       null,\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r       "\\"\\""\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r      ]\n\n\n\n\n\n\n\n\t\t\t\t\r\r\r\r      '>,
      [true, false, null, '""']
    >
  >,

  // Nested Record & List (optional)
  Expect<
    Equal<
      Parse<'{"":{"":{"":{"":{"":{"":{"":{"":{"":{"":{}}}}}}}}}}}'>,
      {
        '': {
          '': { '': { '': { '': { '': { '': { '': { '': { '': {} } } } } } } } }
        }
      }
    >
  >,
  Expect<Equal<Parse<'[[[[[[[[[[[]]]]]]]]]]]'>, [[[[[[[[[[[]]]]]]]]]]]>>,
  Expect<
    Equal<
      Parse<'[[[[[[[[[[[{"":{"":{"":{"":{"":{"":{"":{"":{"":{"":[[[[[[[[[[[]]]]]]]]]]]}}}}}}}}}}]]]]]]]]]]]'>,
      [
        [
          [
            [
              [
                [
                  [
                    [
                      [
                        [
                          [
                            {
                              '': {
                                '': {
                                  '': {
                                    '': {
                                      '': {
                                        '': {
                                          '': {
                                            '': {
                                              '': { '': [[[[[[[[[[[]]]]]]]]]]] }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    >
  >
]


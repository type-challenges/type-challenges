import type { Equal, Expect } from '@type-challenges/utils'
;(() => {
  type Cases = [
    Expect<ParseEqual<{
      "a": "b",
      "b": false,
      "c": [true, false, "hello", {
        "a": "b",
        "b": false
      }],
      "nil": null
    }>>,
    Expect<ParseEqual<{}>>,
    Expect<ParseEqual<[]>>,
    Expect<ParseEqual<[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]>>,
    Expect<Equal<Stringify<[1]>, never>>,
    Expect<ParseEqual<true>>,
    Expect<ParseEqual<false>>,
    Expect<ParseEqual<null>>,
    Expect<ParseEqual<['Hello', true, false, null]>>,
    Expect<ParseEqual<{
      'hello\r\n\b\f': 'world',
      'world': null
    }>>,
    Expect<Equal<Stringify<{ 1: "world" }>, never>>,
    Expect<Equal<Stringify<1>, never>>,
    Expect<Equal<Stringify<symbol>, never>>,
    Expect<Equal<Stringify<string>, never>>,
    Expect<Equal<Stringify<boolean>, never>>,
    Expect<Equal<Stringify<unknown[]>, never>>,
    Expect<Equal<Stringify<Record<string, unknown>>, never>>,
    Expect<Equal<Stringify<any>, never>>,
    Expect<Equal<Stringify<unknown>, never>>,
    Expect<Equal<Stringify<never>, never>>,
    Expect<ParseEqual<{
      "hello\"": "world\n you're in\b\f\n\r\t\b\f\n\r\t",
      sites: [ "Google", "Bing"],
      true: ["or", false],
      false: [true],
      a: {
        b: {
          c: {
            d: [{
              ok: false
            }]
          }
        }
      }
    }>>,
    Expect<Equal<Stringify<`"'"'\\/\b\f\n\r\t `>, "\"\\\"'\\\"'\\\\\\/\\b\\f\\n\\r\\t \"">>
  ]


  type ParseEqual<T> = Equal<Parse<Stringify<T>>, Merge<T>>

  // JSON Parser (#6228), see https://tsch.js.org/6228
  // Don't cheat. :)
  type Escape = {
    '"': '"',
    '\\': '\\',
    '/': '/',
    'b': '\b',
    'f': '\f',
    'n': '\n',
    'r': '\r',
    't': '\t'
  }

  type Space = ' ' | '\r' | '\t' | '\n'
  type Symbols = '{' | '}' | '[' | ']' | ':' | ','
  type SymbolToken<T extends Symbols> = [0, T]
  type StringToken<T extends string> = [1, T]
  type BooleanToken<T extends boolean> = [2, T]
  type NullToken = [3, null]
  type Token =
    | SymbolToken<Symbols>
    | StringToken<string>
    | BooleanToken<boolean>
    | NullToken
    | [number, unknown]

  type EvalResult<Output, Tokens extends Token[]> = [Output, Tokens]
  type TokenSplit<First extends Token, Rest extends Token[]> = [First, ...Rest]
  type Tokenize<Input extends string, Output extends Token[] = []> =
    Input extends `${infer First}${infer Rest}`
    ? First extends Space
      ? Tokenize<Rest, Output>
    : First extends Symbols
      ? Tokenize<Rest, [...Output, SymbolToken<First>]>
    : First extends '"'
      ? [TakeString<Rest>] extends [never]
        ? never
        : [...Output, ...TakeString<Rest>]
    : Input extends `true${infer Rest}`
      ? Tokenize<Rest, [...Output, BooleanToken<true>]>
    : Input extends `false${infer Rest}`
      ? Tokenize<Rest, [...Output, BooleanToken<false>]>
    : Input extends `null${infer Rest}`
      ? Tokenize<Rest, [...Output, NullToken]>
      : never
    : Input extends ''
      ? Output
      : never

  type TakeString<Input extends string, Output extends string = ''> =
    Input extends `\\${infer Rest}`
    ? Rest extends `${infer First extends keyof Escape}${infer Rest}`
      ? TakeString<Rest, `${Output}${Escape[First]}`>
      : never
    : Input extends `${infer First}${infer Rest}`
      ? First extends '\n'
        ? never
        : First extends '"'
          ? [StringToken<Output>, ...Tokenize<Rest>]
          : TakeString<Rest, `${Output}${First}`>
      : never


  type EvalPrimitive<Input extends Token[]> =
    Input extends TokenSplit<[1 | 2 | 3, infer Output], infer Rest>
    ? EvalResult<Output, Rest>
    : never

  type EvalArrayElements<Input extends Token[], Output extends unknown[] = []> =
    Input extends TokenSplit<infer First, infer Rest>
    ? First extends SymbolToken<']'>
      ? EvalResult<Output, Rest>
      : Eval<Input> extends EvalResult<infer Element, infer Rest>
        ? Rest extends TokenSplit<infer First, infer Rest>
          ? First extends SymbolToken<']'>
            ? EvalResult<[...Output, Element], Rest>
            : First extends SymbolToken<','>
              ? EvalArrayElements<Rest, [...Output, Element]>
              : never
          : never
        : never
    : never

  type EvalArray<Input extends Token[]> =
    Input extends TokenSplit<SymbolToken<'['>, infer Rest>
    ? EvalArrayElements<Rest>
    : never

  type EvalObjectEntries<Input extends Token[], Output extends Record<string, unknown> = {}> =
    Input extends TokenSplit<infer First, infer Rest>
    ? First extends SymbolToken<'}'>
      ? EvalResult<Output, Rest>
      : Eval<Input> extends EvalResult<infer Key extends string, infer Rest>
        ? Rest extends TokenSplit<SymbolToken<':'>, infer Rest>
          ? Eval<Rest> extends EvalResult<infer Value, infer Rest>
            ? Output & Record<Key, Value> extends infer Output extends Record<string, unknown>
              ? Rest extends TokenSplit<infer First, infer Rest>
                ? First extends SymbolToken<'}'>
                  ? EvalResult<Output, Rest>
                  : First extends SymbolToken<','>
                    ? EvalObjectEntries<Rest, Output>
                    : never
                : never
              : never
            : never
          : never
        : never
    : never

  type EvalObject<Input extends Token[]> =
    Input extends TokenSplit<SymbolToken<'{'>, infer Rest>
    ? EvalObjectEntries<Rest>
    : never

  type Eval<Input extends Token[]> =
    | EvalPrimitive<Input>
    | EvalArray<Input>
    | EvalObject<Input>

  type Merge<T> =
    T extends object
    ? { [P in keyof T]: Merge<T[P]> }
    : T

  type Parse<T extends string> =
    string extends T
    ? never
    : [Tokenize<T>] extends [never]
      ? never
      : Eval<Tokenize<T>> extends EvalResult<infer Output, []>
        ? Merge<Output>
        : never
})()

/*
Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.

For example

type trimmed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
*/
export type Whitespace = ' ' | '\n' | '\t'

type TrimLeft<S extends string> = S extends `${Whitespace}${infer R}` ? TrimLeft<R> : S

/*
`S` extends the characters in the string.
`Whitespace` will be one of those three union types.
Recursively run the characters through `TrimLeft` to remove each matching `Whitespace`
Once `false`, return the `string`.
*/

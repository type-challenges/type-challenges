/*
Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.

For example

type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
*/

type Whitespace = ' ' | '\n' | '\t'
type TrimL<S extends string> = S extends `${Whitespace}${infer L}` ? TrimL<L> : S
type TrimR<S extends string> = S extends `${infer R}${Whitespace}` ? TrimR<R> : S
type Trim<S extends string> = TrimL<TrimR<S>>

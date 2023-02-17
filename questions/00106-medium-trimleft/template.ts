
export type Space = " " | "\n" | "\t"
export type TrimLeft<S extends string> = S extends `${Space}${infer R}` ? TrimLeft<R>: S;

type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

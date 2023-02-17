import { Space, TrimLeft } from "../00106-medium-trimleft/template"

export type TrimRight<S extends string> = S extends `${infer R}${Space}` ? TrimRight<R> : S
export type Trim<S extends string> = TrimLeft<S> extends `${infer R}${Space}` ? TrimRight<R> : TrimLeft<S>

type trimmed = Trim<'  Hello World'> // expected to be 'Hello World'

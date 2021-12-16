import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<MutableKeys<{ a: number, readonly b: string }>, "a">>,
    Expect<Equal<MutableKeys<{ a: undefined, readonly b: undefined }>, "a">>,
    Expect<Equal<MutableKeys<{ a: undefined, readonly b?: undefined, c: string, d: null }>, "a" | "c" | "d">>,
    Expect<Equal<MutableKeys<{}>, never>>
]

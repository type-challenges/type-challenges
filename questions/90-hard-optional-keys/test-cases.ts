import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<OptionalKeys<{ foo: number, bar?: string }>, "bar">>,
    Expect<Equal<OptionalKeys<{ foo: undefined, bar?: undefined }>, "bar">>,
]

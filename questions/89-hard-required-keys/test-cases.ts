import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<RequiredKeys<{ foo: number, bar?: string }>, "foo">>,
    Expect<Equal<RequiredKeys<{ foo: undefined, bar?: undefined }>, "foo">>,
]

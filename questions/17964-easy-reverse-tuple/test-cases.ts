import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Reverse<[1, 2, 3, 4, 5]>, [5, 4, 3, 2, 1]>>,
    Expect<Equal<Reverse<[null, undefined, string, number]>, [number, string, undefined, null]>>,
    Expect<Equal<Reverse<[string, 1, number, "a", []]>, [[], "a", number, 1, string]>>,
];

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<DistinctUnions<{a: 1} | {a: 1}>, {a: 1}>>,
    Expect<Equal<DistinctUnions<{a: 1} | {a: 2}>, {a: 1} | {a: 2}>>,
    Expect<Equal<DistinctUnions<{a: 1} | {a: 2, b: 2}>, {a: 1} | {a: 2, b: 2}>>,
    Expect<Equal<
        DistinctUnions<{a: 1} | {a: 2, b: 2} | {a: 2}>,
        {a: 1} | {a: 2, b: 2} | {a: 2}
    >>,
    Expect<Equal<DistinctUnions<{a: {b: 1} | {b: 1}}>, {a: {b: 1}}>>,
    Expect<Equal<DistinctUnions<[{a: 1} | {a: 1}]>, [{a: 1}]>>,
    Expect<Equal<
        DistinctUnions<((a: {x: 1} | {x: 1}) => 2) | ((a: {x: 1}) => 2)>,
        (a: {x: 1}) => 2
    >>,
]

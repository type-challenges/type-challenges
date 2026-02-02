import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Collapse<1 | 2 | 3>, 1 | 2 | 3>>,
  Expect<Equal<Collapse<{a: 1} | {a: 2} | {a: 3}>, {a: 1 | 2 | 3}>>,
  Expect<Equal<Collapse<[1, 2, 3] | ['1', '2', '3']>, [1 | '1', 2 | '2', 3 | '3']>>,
  Expect<Equal<
    Collapse<
      {a: 1, f: (b: 1, c: 1) => (d: 1, e: [1, 1] | ['1', '1']) => [1, 1] | ['1', '1']} |
      {a: 2, f: (b: 2, c: 2) => (d: 2, e: [2, 2] | ['2', '2']) => [2, 2] | ['2', '2']}
    >,
    {
        a: 1 | 2;
        f: ((b: 1, c: 1) => (d: 1, e: [1, 1] | ["1", "1"]) => [1 | "1", 1 | "1"])
        | ((b: 2, c: 2) => (d: 2, e: [2, 2] | ["2", "2"]) => [2 | "2", 2 | "2"]);
    }
  >>,
  Expect<Equal<
    Collapse<
      [1, {a: {b: 1, c: {d: [1]}}, e: 1}, [[1]], 1] |
      [2, {a: {b: 2, c: {d: [2]}}, e: 2}, [[2]], 2]
    >,
    [1 | 2, {
        a: {
            b: 1 | 2;
            c: {
                d: [1 | 2];
            };
        };
        e: 1 | 2;
    }, [[1 | 2]], 1 | 2]
  >>
]

import type { Equal, Expect } from '@type-challenges/utils'

type result1 = IntersectParameters<[], []>
type TwoEmpty = Expect<Equal<[], result1>>

type result2 = IntersectParameters<[], [string, number, ...boolean[]]>
type OneEmpty = Expect<Equal<[string, number, ...boolean[]], result2>>

type result3 = IntersectParameters<['a'], [string, number]>
type LongerParametersPreserved = Expect<Equal<['a', number], result3>>

type result4 = IntersectParameters<[unknown], []>
// Avoids evaluating unknown to {}
type UnknownPreserved = Expect<Equal<[unknown], result4>>

type result5 = IntersectParameters<[('a' | 'b' | 'c')?], [string, 1 | 2 | 3]>
type OneOptional = Expect<Equal<['a' | 'b' | 'c', 1 | 2 | 3], result5>>

type result6 = IntersectParameters<[{ a: 0 }?], [{ b: 1 }?]>
type BothOptional = Expect<Equal<[{ a: 0, b: 1 }?], result6>>

type result7 = IntersectParameters<[{ a: 0 }?], []>
type OptionalAndNotPresent = Expect<Equal<[{ a: 0 }?], result7>>

type result8 = IntersectParameters<{ a: 0 }[], { b: 1 }[]>
type TwoNonFixedLength = Expect<Equal<{ a: 0, b: 1 }[], result8>>

type result9 = IntersectParameters<[{ a: 0 }, { b: 1 }], { c: 2 }[]>
type OneNonFixedLength = Expect<
    Equal<
        [
          {
            a: 0
            c: 2
          },
          {
            b: 1
            c: 2
          },
          ...{
            c: 2
          }[],
        ],
        result9
    >
>

type result10 = IntersectParameters<
    [{ a: 0 }, ...{ b: 1 }[]],
    [{ c: 2 }, { d: 3 }]
>
type OneTrailingRest = Expect<
    Equal<
        [
          {
            a: 0
            c: 2
          },
          {
            b: 1
            d: 3
          },
          ...{
            b: 1
          }[],
        ],
        result10
    >
>

type result11 = IntersectParameters<
    [{ a: 0 }, ...{ b: 1 }[]],
    [{ c: 2 }, { d: 3 }, ...{ e: 4 }[]]
>
type TwoTrailingRest = Expect<
    Equal<
        [
          {
            a: 0
            c: 2
          },
          {
            b: 1
            d: 3
          },
          ...{
            b: 1
            e: 4
          }[],
        ],
        result11
    >
>

type result12 = IntersectParameters<
    [{ a: 0 }, { b: 1 }?, { c: 2 }?, ...{ d: 3 }[]],
    [{ e: 4 }?, { f: 5 }?, ...{ g: 6 }[]]
>
type KitchenSink = Expect<
    Equal<
        [
          {
            a: 0
            e: 4
          },
            {
              b: 1
              f: 5
            }?,
            {
              c: 2
              g: 6
            }?,
            ...{
              d: 3
              g: 6
            }[],
        ],
        result12
    >
>

type result13 = IntersectParameters<['a', 'b'], [string, ...string[]]>
type ExtraVariadicArgsPreserved = Expect<
    Equal<['a', 'b', ...string[]], result13>
>

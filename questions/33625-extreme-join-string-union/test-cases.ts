import { Expect } from '@type-challenges/utils'

type Case1 = 'test' | 'hello' | 'world'
type Case2 = '1' | '2' | '3' | '4' | '5'
type Sep = ', '

type cases = [
  Expect<JoinStringUnion<Case1, Sep> extends JoinStringUnionAllPossibilities<Case1, Sep> ? true : false>,
  Expect<[UnionToIntersection<JoinStringUnion<Case1, Sep>>] extends [never] ? false : true>,
  Expect<JoinStringUnion<Case2, Sep> extends JoinStringUnionAllPossibilities<Case2, Sep> ? true : false>,
  Expect<[UnionToIntersection<JoinStringUnion<Case2, Sep>>] extends [never] ? false : true>,
]

type UnionToIntersection<T> = (
  T extends any ? (arg: T) => any : never
) extends (arg: infer I) => any
  ? I
  : never;
type JoinStringUnionAllPossibilitiesInternal<
  T extends string,
  R extends string[] = [],
  B extends string = T
> = [T] extends [never]
  ? R
  : T extends string
  ? JoinStringUnionAllPossibilitiesInternal<Exclude<B, T>, [...R, T]>
  : never;
type JoinStringUnionAllPossibilities<
  T extends string,
  S extends string,
  R extends string | undefined = undefined,
  A extends string[] = JoinStringUnionAllPossibilitiesInternal<T>
> = A extends []
  ? R
  : JoinStringUnionAllPossibilities<
      never,
      S,
      R extends undefined ? A[0] : `${R}${S}${A[0]}`,
      A extends [any, ...infer I extends string[]] ? I : never
    >;

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<DynamicRoute<'/shop'>, {}>>,
  Expect<Equal<DynamicRoute<'/shop/[]'>, {}>>,
  Expect<Equal<DynamicRoute<'/shop/[slug]'>, { slug: string }>>,
  Expect<Equal<DynamicRoute<'/shop/[slug]/'>, { slug: string }>>,
  Expect<
    Equal<DynamicRoute<'/shop/[slug]/[foo]'>, { slug: string, foo: string }>
  >,
  Expect<
    Equal<
      DynamicRoute<'/shop/[slug]/stub/[foo]'>,
      { slug: string, foo: string }
    >
  >,
  Expect<
    Equal<
      DynamicRoute<'/shop/[slug]/stub/[foo]'>,
      { slug: string, foo: string }
    >
  >,
  Expect<
    Equal<
      DynamicRoute<'/shop/[slug]/stub/[...foo]'>,
      { slug: string, foo: string[] }
    >
  >,
  Expect<
    Equal<
      DynamicRoute<'/shop/[slug]/stub/[[...foo]]'>,
      { slug: string, foo?: string[] }
    >
  >,
  Expect<
    Equal<
      DynamicRoute<'/shop/[slug]/stub/[[...foo]]/[]'>,
      { slug: string, foo?: string[] }
    >
  >,
  Expect<
    Equal<
      DynamicRoute<'/shop/[slug]/stub/[[...foo]]/[...]'>,
      { slug: string, foo?: string[], '...': string }
    >
  >,
  Expect<
    Equal<
      DynamicRoute<'/shop/[slug]/stub/[[...foo]]/[...]/[]index.html'>,
      { slug: string, foo?: string[], '...': string }
    >
  >,
  Expect<
    Equal<
      DynamicRoute<'/shop/[slug]/stub/[[...foo]]/[...]/[...]index.html'>,
      { slug: string, foo?: string[], '...': string }
    >
  >,
  Expect<Equal<DynamicRoute<'/[slug]/[[...foo]]/[...bar]'>, never>>,
  Expect<Equal<DynamicRoute<'/[[...foo]]/[slug]/[...bar]'>, never>>,
  Expect<Equal<DynamicRoute<'/[[...foo]]/[...bar]/static'>, never>>,
  Expect<
    Equal<
      DynamicRoute<'[[...foo]]/stub/[...bar]'>,
      { foo?: string[], bar: string[] }
    >
  >,
  Expect<
    Equal<
      DynamicRoute<'[first]/[[...foo]]/stub/[...bar]/[last]'>,
      { first: string, foo?: string[], bar: string[], last: string }
    >
  >,
]

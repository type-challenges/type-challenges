/*
  33345 - Dynamic Route
  -------
  by 0753 (@0753Ljuc) #매우 어려움

  ### 질문

  Given below routes, infer its dynamic params.
  | Route                          | Params Type Definition                                                                                     |
  |--------------------------------|------------------------------------------------------------------------------------------------------------|
  | `/blog/[slug]/page.js`         | `{ slug: string }`                                                                                         |
  | `/shop/[...slug]/page.js`      | `{ slug: string[] }`                                                                                       |
  | `/shop/[[...slug]]/page.js`    | `{ slug?: string[] }`                                                                                      |
  | `/[categoryId]/[itemId]/page.js` | `{ categoryId: string, itemId: string }`                                                                 |
  | `/app/[...foo]/[...bar]`       | `never` - It's ambiguous as we cannot decide if `b` on `/app/a/b/c` is belongs to `foo` or `bar`.          |
  | `/[[...foo]]/[slug]/[...bar]`  | `never`                                                                                                    |
  | `/[first]/[[...foo]]/stub/[...bar]/[last]` | `{ first: string, foo?: string[], bar: string[], last: string }`                               |

  > GitHub에서 보기: https://tsch.js.org/33345/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type DynamicRoute<T extends string> = any

/* _____________ 테스트 케이스 _____________ */
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

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/33345/answer/ko
  > 정답 보기: https://tsch.js.org/33345/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

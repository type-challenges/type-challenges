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

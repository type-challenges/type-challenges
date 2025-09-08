<!--info-header-start--><h1>Dynamic Route <img src="https://img.shields.io/badge/-extreme-b11b8d" alt="extreme"/> </h1><blockquote><p>by 0753 <a href="https://github.com/0753Ljuc" target="_blank">@0753Ljuc</a></p></blockquote><p><a href="https://tsch.js.org/33345/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

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


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/33345/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/33345/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
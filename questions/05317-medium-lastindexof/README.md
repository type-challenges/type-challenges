<!--info-header-start--><h1>LastIndexOf <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>by jiangshan <a href="https://github.com/jiangshanmeta" target="_blank">@jiangshanmeta</a></p></blockquote><p><a href="https://tsch.js.org/5317/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Implement the type version of ```Array.lastIndexOf```, ```LastIndexOf<T, U>```  takes an Array ```T```, any ```U``` and returns the index of the last ```U``` in Array ```T```

For example:

```typescript
type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
type Res2 = LastIndexOf<[0, 0, 0], 2> // -1
```
answer
```ts
type Plus<T extends number | string, A extends number[] = []> = `${T}` extends `${A["length"]}` ? A : Plus<T, [0, ...A]>;

type Minus<T extends number | string, U extends any[] = [], A extends number[] = []> = `${T}` extends `${A["length"]}` ? U : U extends [infer U1, ...infer U2] ? Minus<T, U2, [0, ...A]> : U;

type LastIndexOf<T extends any[], U, I extends unknown[] = Minus<1, Plus<T["length"]>>> = T extends [...infer A2, infer A1] ? Equal<A1, U> extends true ? I["length"] : LastIndexOf<A2, U, Minus<1, I>> : -1;

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/5317/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/5317/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->

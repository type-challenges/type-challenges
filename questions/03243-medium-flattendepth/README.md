<!--info-header-start--><h1>FlattenDepth <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>by jiangshan <a href="https://github.com/jiangshanmeta" target="_blank">@jiangshanmeta</a></p></blockquote><p><a href="https://tsch.js.org/3243/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Recursively flatten array up to depth times.

For example:

```typescript
type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
```

answer
```ts
type FlattenDepth<A, N = 1, CN extends any[] = []> = A extends [infer A1, ...infer A2] ? 
      A1 extends [...infer A11] ? CN["length"] extends N ? [A1, ...FlattenDepth<A2, N, CN>] : [...FlattenDepth<A11, N, [...CN, 0]>, ...FlattenDepth<A2, N, CN>] : [A1, ...FlattenDepth<A2, N, CN>] : [];

```

If the depth is provided, it's guaranteed to be positive integer.


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/3243/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/3243/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <hr><h3>Related Challenges</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00459-medium-flatten/README.md" target="_blank"><img src="https://img.shields.io/badge/-459%E3%83%BBFlatten-d9901a" alt="459・Flatten"/></a> <!--info-footer-end-->

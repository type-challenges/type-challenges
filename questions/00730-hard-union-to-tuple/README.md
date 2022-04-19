<!--info-header-start--><h1>Union to Tuple <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23infer-999" alt="#infer"/></h1><blockquote><p>by Sg <a href="https://github.com/suica" target="_blank">@suica</a></p></blockquote><p><a href="https://tsch.js.org/730/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Implement a type, `UnionToTuple`, that converts a union to a tuple.

As we know, union is an unordered structure, but tuple is an ordered, which implies that we are not supposed to preassume any order will be preserved between terms of one union, when unions are created or transformed. 

Hence in this challenge, **any permutation of the elements in the output tuple is acceptable**.

Your type should resolve to one of the following two types, but ***NOT*** a union of them!
```ts
UnionToTuple<1>           // [1], and correct
UnionToTuple<'any' | 'a'> // ['any','a'], and correct
```
or 
```ts
UnionToTuple<'any' | 'a'> // ['a','any'], and correct
```
It shouldn't be a union of all acceptable tuples...
```ts
UnionToTuple<'any' | 'a'> // ['a','any'] | ['any','a'], which is incorrect
```


And a union could collapes, which means some types could absorb (or be absorbed by) others and there is no way to prevent this absorption. See the following examples:
```ts
Equal<UnionToTuple<any | 'a'>,       UnionToTuple<any>>         // will always be a true
Equal<UnionToTuple<unknown | 'a'>,   UnionToTuple<unknown>>     // will always be a true
Equal<UnionToTuple<never | 'a'>,     UnionToTuple<'a'>>         // will always be a true
Equal<UnionToTuple<'a' | 'a' | 'a'>, UnionToTuple<'a'>>         // will always be a true
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/730/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/730/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <hr><h3>Related Challenges</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.md" target="_blank"><img src="https://img.shields.io/badge/-10%E3%83%BBTuple%20to%20Union-d9901a" alt="10・Tuple to Union"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md" target="_blank"><img src="https://img.shields.io/badge/-11%E3%83%BBTuple%20to%20Object-7aad0c" alt="11・Tuple to Object"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00055-hard-union-to-intersection/README.md" target="_blank"><img src="https://img.shields.io/badge/-55%E3%83%BBUnion%20to%20Intersection-de3d37" alt="55・Union to Intersection"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00472-hard-tuple-to-enum-object/README.md" target="_blank"><img src="https://img.shields.io/badge/-472%E3%83%BBTuple%20to%20Enum%20Object-de3d37" alt="472・Tuple to Enum Object"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/03188-medium-tuple-to-nested-object/README.md" target="_blank"><img src="https://img.shields.io/badge/-3188%E3%83%BBTuple%20to%20Nested%20Object-d9901a" alt="3188・Tuple to Nested Object"/></a> <!--info-footer-end-->

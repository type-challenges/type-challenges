<!--info-header-start--><h1>Permutations of Tuple <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23conditional%20type-999" alt="#conditional type"/> <img src="https://img.shields.io/badge/-%23recursion-999" alt="#recursion"/></h1><blockquote><p>by null <a href="https://github.com/gaac510" target="_blank">@gaac510</a></p></blockquote><p><a href="https://tsch.js.org/21220/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Given a generic tuple type `T extends unknown[]`, write a type which produces all permutations of `T` as a union.

For example:

```ts
PermutationsOfTuple<[1, number, unknown]>
// Should return:
// | [1, number, unknown]
// | [1, unknown, number]
// | [number, 1, unknown]
// | [unknown, 1, number]
// | [number, unknown, 1]
// | [unknown, number ,1]
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/21220/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/21220/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <hr><h3>Related Challenges</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.md" target="_blank"><img src="https://img.shields.io/badge/-296%E3%83%BBPermutation-d9901a" alt="296・Permutation"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/04260-medium-nomiwase/README.md" target="_blank"><img src="https://img.shields.io/badge/-4260%E3%83%BBAllCombinations-d9901a" alt="4260・AllCombinations"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/08767-medium-combination/README.md" target="_blank"><img src="https://img.shields.io/badge/-8767%E3%83%BBCombination-d9901a" alt="8767・Combination"/></a> <!--info-footer-end-->
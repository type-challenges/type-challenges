<!--info-header-start--><h1>PickByPrefix <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><blockquote><p>by saxon-y <a href="https://github.com/saxon-y" target="_blank">@saxon-y</a></p></blockquote><p><a href="https://tsch.js.org/2640/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Implement `type PickByPrefix<T, U>` Pick the item from `U` with the key prefixed by `T`

For example

```typescript
type PreObject = {
  pre_a: "pre_a",
  other_test: "other_test",
  pre_b: "pre_b",
  start_hello: 'start_hello'
}

type a = PickByPrefix<'pre', PreObject> // expected to be Pick<PreObject, 'pre_a' | 'pre_b'>
type b = PickByPrefix<'pre' | 'start', PreObject> // expected to be Pick<PreObject, 'pre_a' | 'pre_b' | 'start_hello'>
type c = PickByPrefix<'', PreObject> // expected to be PreObject
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/2640/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/2640/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <hr><h3>Related Challenges</h3><a href="https://github.com/type-challenges/type-challenges/blob/master/questions/2646-medium-pickbypostfix/README.md" target="_blank"><img src="https://img.shields.io/badge/-2646%E3%83%BBPickByPostfix-d9901a" alt="2646・PickByPostfix"/></a> <!--info-footer-end-->
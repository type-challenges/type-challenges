<!--info-header-start--><h1>PickByPostfix <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><blockquote><p>by saxon-y <a href="https://github.com/saxon-y" target="_blank">@saxon-y</a></p></blockquote><p><a href="https://tsch.js.org/2646/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Implement `type PickByPostfix<T, U>` Pick the item from `U` with the key postfixed by `T`

For example

```typescript
type PostObject = {
  a_post: "a_post",
  b_post: "b_post",
  other_test: "other_test",
  hello_end: 'hello_end'
}

type a = PickByPostfix<'post', PostObject> // expected to be Pick<PostObject, 'a_post' | 'b_post'>
type b = PickByPostfix<'post' | 'end', PostObject> // expected to be Pick<PostObject, 'a_post' | 'b_post' | 'hello_end'>
type c = PickByPostfix<'', PostObject> // expected to be PostObject
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/2646/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/2646/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <hr><h3>Related Challenges</h3><a href="https://github.com/type-challenges/type-challenges/blob/master/questions/2640-medium-pickbyprefix/README.md" target="_blank"><img src="https://img.shields.io/badge/-2640%E3%83%BBPickByPrefix-d9901a" alt="2640・PickByPrefix"/></a>
<!--info-header-start--><h1>OptionalUndefined <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> </h1><blockquote><p>by Jesus The Hun <a href="https://github.com/JesusTheHun" target="_blank">@JesusTheHun</a></p></blockquote><p><a href="https://tsch.js.org/28143/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Implement the util type `OptionalUndefined<T, Props>` that turns all the properties of `T` that can be `undefined`, into optional properties. In addition, a second -optional- generic `Props` can be passed to restrict the properties that can be altered.

```ts
OptionalUndefined<{ value: string | undefined, description: string }>
// { value?: string | undefined; description: string }

OptionalUndefined<{ value: string | undefined, description: string | undefined, author: string | undefined }, 'description' | 'author'>
// { value: string | undefined; description?: string | undefined, author?: string | undefined }
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/28143/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/28143/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
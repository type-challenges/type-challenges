<!--info-header-start--><h1>restrict-key <img src="https://img.shields.io/badge/-easy-90bb12" alt="easy"/> <img src="https://img.shields.io/badge/-%23built--in-999" alt="#built-in"/></h1><blockquote><p>by sinoon <a href="https://github.com/sinoon" target="_blank">@sinoon</a></p></blockquote><p><a href="https://type-challenges.netlify.app/11/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Given an array, the key in the object must be an item in the array


For example

```ts
const list = ['pop', 'slice', 'push', 'concat'] as const

const object: TupleToObject<list> // expected { pop: 'pop', slice: 'slice', concat: 'concat'}

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://type-challenges.netlify.app/11/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <a href="https://type-challenges.netlify.app/11/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-green" alt="Share your Solutions"/></a> <!--info-footer-end-->

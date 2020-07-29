<!--info-header-start--><h1>Tuple to Object <img src="https://img.shields.io/badge/-easy-90bb12" alt="easy"/> </h1><blockquote><p>by sinoon <a href="https://github.com/sinoon" target="_blank">@sinoon</a></p></blockquote><p><a href="https://type-challenges.netlify.app/11/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Given an array, transform to a object type and the key/value must in the given array.

For example

```ts
const list = ['tesla', 'model 3', 'model X', 'model Y'] as const

const object: TupleToObject<list> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://type-challenges.netlify.app/11/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <a href="https://type-challenges.netlify.app/11/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-green" alt="Share your Solutions"/></a> <!--info-footer-end-->

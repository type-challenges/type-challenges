<!--info-header-start--><h1>Parameter Intersection <img src="https://img.shields.io/badge/-extreme-b11b8d" alt="extreme"/> <img src="https://img.shields.io/badge/-%23parameters-999" alt="#parameters"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/> <img src="https://img.shields.io/badge/-%23variadic-999" alt="#variadic"/> <img src="https://img.shields.io/badge/-%23optional-999" alt="#optional"/> <img src="https://img.shields.io/badge/-%23rest-999" alt="#rest"/> <img src="https://img.shields.io/badge/-%23intersection-999" alt="#intersection"/></h1><blockquote><p>by David Blass <a href="https://github.com/ssalbdivad" target="_blank">@ssalbdivad</a></p></blockquote><p><a href="https://tsch.js.org/31997/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Given two parameter arrays, compute a third tuple representing the type of args required to satisfy both of the original tuples.

Your solution should correctly handle fixed and non-fixed length arrays, optional elements and variadic elements. For example:

```ts
type Result = IntersectParameters<
	[{ a: 0 }, { b: 1 }?, { c: 2 }?, ...{ d: 3 }[]],
	[{ e: 4 }?, { f: 5 }?, ...{ g: 6 }[]]
>

type Expected = [
	{
		a: 0
		e: 4
	},
	{
		b: 1
		f: 5
	}?,
	{
		c: 2
		g: 6
	}?,
	...{
		d: 3
		g: 6
	}[]
]
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/31997/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/31997/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
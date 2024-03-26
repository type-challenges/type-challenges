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

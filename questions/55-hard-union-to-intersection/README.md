Implement the advanced util type `UnionToIntersection<U>`

For example

```ts
type I = Union2Intersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true
```

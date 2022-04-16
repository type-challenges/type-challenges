Give an array of strings, then do Permutation & Combination.
It's also useful for the prop types like video [controlsList](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList)

```ts
// expected to be `"foo" | "bar" | "baz" | "foo bar baz" | "bar foo" | "baz foo" | "bar baz" | "baz bar"`
type Keys = PermutationCombination<['foo', 'bar', 'baz']>
```

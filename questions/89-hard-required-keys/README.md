Implement the advanced util type `RequiredKeys<T>`, which picks all the required keys into a union.

For example

```ts
type Result = RequiredKeys<{ foo: number; bar?: string }>;
// expected to be “foo”
```

Implement the advanced util type `GetOptional<T>`, which remains all the optional fields

For example

```ts
type I = GetOptional<{ foo: number, bar?: string }> // expected to be { bar?: string }
```

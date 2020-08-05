Implement the advanced util type `GetRequired<T>`, which remains all the required fields

For example

```ts
type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }
```

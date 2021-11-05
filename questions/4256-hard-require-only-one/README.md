Implement the advanced util type RequireOnlyOne<T>, which requires only one key in the object.

For example:
```ts
interface Relation {
  a?: string;
  b?: string;
  c?: number,
}
RequireOnlyOne<Relation, "a"> // expected {a: string, b?: string, c?: string}
```

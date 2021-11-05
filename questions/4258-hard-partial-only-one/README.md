Implement the advanced util type PartialOnlyOne<T>, which makes one property in T optional.

For example:
```ts
interface Relation {
  a: string;
  b: string;
  c: number,
}
PartialOnlyOne<Relation, "a"> // expected {a?: string, b: string, c: string}
```

Transform a string enum to union type.

Example:
```ts
enum A {
  a = 'aa',
  b = 'bb',
  c = 'cc'
}

type Result = EnumToUnion<A>; // expected to be "aa" | "bb" | "cc"
```

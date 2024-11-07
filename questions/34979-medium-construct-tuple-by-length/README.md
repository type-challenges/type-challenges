Given a generic type `T` and a generic number type `Length extends number`, returns a tuple of type `T` with a length of `Length`.

```ts
type result = ConstructTupleByLength<number, 2>; // [number, number]
```

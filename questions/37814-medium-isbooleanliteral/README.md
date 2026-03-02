Implement a utility type `IsBooleanLiteral<T>` that takes a type `T` and returns `true` if `T` is strictly `true` or `false`.
If `T` is the union type `boolean` (which represents `true | false`), it should return `false`.

For example:

```typescript
type Case1 = IsBooleanLiteral<true>   // true
type Case2 = IsBooleanLiteral<false>  // true
type Case3 = IsBooleanLiteral<boolean> // false
```

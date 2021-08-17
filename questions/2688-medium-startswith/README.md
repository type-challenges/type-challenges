Implement `StartsWith<T, U>` which takes two exact string types and returns whether `T` starts with `U`

For example

```typescript
type a = StartsWith<'abc', 'ac'> // expected to be false
type b = StartsWith<'abc', 'ab'> // expected to be true
type c = StartsWith<'abc', 'abcd'> // expected to be false
```

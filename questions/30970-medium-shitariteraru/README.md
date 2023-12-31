Sometimes you may want to determine whether a string literal is a definite type. For example, when you want to check whether the type specified as a class identifier is a fixed string literal type.

```typescript
type Action<ID extends string> = { readonly id: ID };
```

Since it must be fixed, the following types must be determined as false.

* never type
* Union of string literal types
* Template literal types with embedded string, number, bigint, boolean

Determine whether the given type S is a definite string literal type.

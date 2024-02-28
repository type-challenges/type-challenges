How can we build a type that "unboxes" arrays, functions, promises, and tuples?

Example:

```typescript
Unbox<string> // string
Unbox<()=>number> // number
Unbox<boolean[]> // boolean
Unbox<Promise<boolean>> // boolean
```

Bonus: Can we make it recursive?

```typescript
Unbox<() => () => () => () => number> // number
```

Double Bonus: Can we control the recursion?

```typescript
Unbox<() => () => () => () => number, 3> // () => number
```

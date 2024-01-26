实现一个可以将两个 bigint 相减的类型减法。传入 2 个 bigint 类型作参数，得到 1 个 bigint 类型。

```typescript
type A = BigIntSubed<5n, 3n> // 2n
type B = BigIntSubed<1n, -2n> // 3n
type C = BigIntSubed<1n, bigint> // bigint
```

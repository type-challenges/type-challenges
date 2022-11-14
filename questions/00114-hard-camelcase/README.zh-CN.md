实现 `CamelCase<T>` ，将 `snake_case` 类型的表示的字符串转换为 `camelCase` 的表示方式。

例如

```ts
type camelCase1 = CamelCase<"hello_world_with_types"> // 预期为 'helloWorldWithTypes'
type camelCase2 = CamelCase<"HELLO_WORLD_WITH_TYPES"> // 期望与前一个相同
```

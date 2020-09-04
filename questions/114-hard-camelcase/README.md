Implement `CamelCase<T>` which converts `snake_case` string to `camelCase`.

For example

```ts
type camelCase1 = CamelCase<'hello_world_with_types'> // expected to be 'helloWorldWithTypes'
type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'> // expected to be same as previous one
```

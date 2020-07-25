Implement a generic `GetReadonlyKeys<T>` that returns a union of the readonly keys of an Object.

For example

```ts
interface Todo {
  readonly title: string
  readonly description: string
  completed: boolean
}

type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
```
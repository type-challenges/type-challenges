Implement the util type `OptionalUndefined<T, Props>` that turns all the properties of `T` that can be `undefined`, into optional properties. In addition, a second -optional- generic `Props` can be passed to restrict the properties that can be altered.

```ts
OptionalUndefined<{ value: string | undefined, description: string }>
// { value?: string | undefined; description: string }

OptionalUndefined<{ value: string | undefined, description: string | undefined, author: string | undefined }, 'description' | 'author'>
// { value: string | undefined; description?: string | undefined, author?: string | undefined }
```

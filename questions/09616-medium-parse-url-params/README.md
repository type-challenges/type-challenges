You're required to implement a type-level parser to parse URL params string into an Union.

```ts
ParseUrlParams<':id'> // id
ParseUrlParams<'posts/:id'> // id
ParseUrlParams<'posts/:id/:user'> // id | user
```

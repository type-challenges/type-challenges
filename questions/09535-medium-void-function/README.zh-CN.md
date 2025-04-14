默认的VoidFunction不支持范型，现在请实现一个支持范型的VoidFunction类型

```ts
VoidFunction // () => void
VoidFunction<boolean> // (arg: boolean) => void
VoidFunction<[boolean, boolean]> // (...args: [boolean, boolean]) => void
```

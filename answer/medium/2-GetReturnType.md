# 2.GetReturnType

## 1. 풀이
```ts
type MyReturnType<T> = T extends (...args: readonly any[]) => infer R ? R : never;
```
# 3060-Unshift

## 1. 풀이
```ts
type Unshift<T extends Array<any>, U> = [U, ...T];
```
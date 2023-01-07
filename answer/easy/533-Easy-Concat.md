# 533-Easy-Concat

## 1. 풀이

```ts
type Concat<T extends Array<any>, U extends Array<any>> = [...T, ...U]
```

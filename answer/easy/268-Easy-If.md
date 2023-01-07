# 268-Easy-If

## 1. 풀이

```ts
type If<C, T, F> = C extends true ? T : F
```

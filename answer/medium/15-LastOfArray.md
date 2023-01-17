# 15. LastOfArray

## 1. 풀이
```ts
type Last<T extends any[]> = T extends [...infer U, infer R] ? R : never;
```

## 2. 해설
1. `infer`를 이용해서 처음 ~ 마지막 직전 값, 마지막 값을 `[...infer U, infer R]` 로 추론한다.
2. 1번에서 정의한 `[...infer U, infer R]`에 `T`가 속한다면 `R`을 뱉고 아닌 경우는 `never`로 처리한다. 
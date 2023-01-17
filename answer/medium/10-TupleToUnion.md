# 10. TupleToUnion

## 1. 풀이
```ts
type TupleToUnion<T extends readonly unknown[]> = T extends readonly [infer R, ...infer U] ? R | TupleToUnion<U> : never;
```

## 2. 해설
1. tuple에 타입은 `readonly T[]`형태로 정의된다.
2. `infer`를 이용하여 튜플 원소에 타입이 런타임에 예측되도록 한다. 따라서 `T`가 `[infer R, ...infer U]`의 형태에 속하는지 검증한다.
3. 검증한 내용이 맞다면 `U`를 다시 `TupleToUnion`에 넣어 재귀 타입으로 돌린다.
4. Union 타입을 이용하여 `R`과 `TupleToUnion<U>`의 결과를 합친다.
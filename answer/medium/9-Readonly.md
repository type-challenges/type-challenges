# 9. Readonly

## 1. 목표
원시 타입과 Function을 제외한 타입이 들어 오더라도 하위 타입들을 모두 Readonly로 만들어버리자.

## 2. object vs Object
- object
    - object는 원시 타입을 제외한 모든 타입을 말한다.
- Object
    - js에 모든 타입에 부모가 되는 타입

## 3. 풀이
```ts
type DeepReadonly<T> = {
  readonly [key in keyof T]: T[key] extends object ? T[key] extends Function ?  T[key] : DeepReadonly<T[key]> : T[key];
};
```

## 4. 해설
1. key는 T에 속성이니 `[key in keyof T]`로 사용했다.
2. T의 속성 중, 원시 타입은 전개할 것이 없으니 T[key] extends object를 사용했다.
3. 2의 결과 중, Function도 제외하니 T[key] extends Function을 사용했다.

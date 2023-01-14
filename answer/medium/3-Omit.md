# 3-Omit

## 1. 목표
T에 존재하는 키들 중, K를 제외하고 모든 키를 받는다는 타입을 구현한다.
## 2. 풀이
```ts
type MyOmit<T extends Object, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
} 
```

## 3. 해설
1. K는 T에서 나오는 모든 키들을 받을 수 있기 때문에 `K extends keyof T`로 설정하였다.
2. 마찬가지로 key는 T에서 나오는 모든 키가 될 가능성이 있기 때문에 `key inf keyof T`로 선언하였다.`
3. 2번에서 나온 key 중 K는 사용할 수 없기 때문에 `as key extends K ? never ? key`를 사용한다.
4. 2번과 3번을 조합해서 `key in keyof T as key extends K ? never : key: T[key]`가 나오게 된다. T에 키 중, K는 사용할 수 없다고 말하는 것이다.
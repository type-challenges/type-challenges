# 4-Pick 풀이

## 1. K extends keyof T vs keyof T

`K extends keyof T`는 함수의 결과값으로 `T[K]`를 취할 수 있다. 이것은 특정 키 값 `K`를 **p1 그 자체로 인식한다**는 것이다.

```tsx
function func<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const o = {
  p1: 0,
  p2: ''
}

func(o, 'p1') // 함수의 결과 타입은 number, key는 p1으로 인식
```

반면 `keyof T`는 함수의 결과값으로 `T[keyof T]`를 취할 수 있다. 이것은 특정 키 값 `K`를 **p1이나 p2로 한다**는 것이다.

```tsx
function func2<T>(obj: T, key: keyof T) {
  return obj[key];
}

const o = {
  p1: 0,
  p2: ''
}

func2(o, 'p1') // 함수의 결과는 number | string, key는 p1이나 p2로 인식
```

## 2. 해답

```tsx
type MyPick<T, K extends keyof T> = {
  [k in K]: T[k]
}
```

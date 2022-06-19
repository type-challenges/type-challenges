## 1. K extends keyof T vs keyof

`K extends keyof T`는 함수의 결과값으로 `T[K]`를 취할 수 있다. 이것은 특정 키 값 `K`를 **string 타입이 아닌 상수로 인식한**다는 것이다.

```tsx
const func<T, K extends of T>(obj: T, key: K) => obj[key]; 
const obj = { 'abc' : 1, 'def' : 2 }
func(obj, 'abc') // 결과는 1, 키의 타입은 abc
```

반면 `keyof T`는 함수의 결과값으로 `T[keyof T]`를 취할 수 있다. 이것은 특정 키 값 `K`를 **상수가 아닌 자바스크립트에서 제공하는 string이나 number로 인식**한다는 것이다.

```tsx
const func<T>(obj: T, key: keyof T) => obj[key];
const obj = { 'abc' : 1, 'def' : 2 }
func(obj, 'abc') // 결과는 1, 키의 타입은 string
```

## 2. 해답

```tsx
type MyPick<T, K extends keyof T> = {
  [k in K]: T[k]
} ;
```
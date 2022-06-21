# 7-Readonly 풀이

## 1. K extends keyof T vs k in keyof T

`K extends keyof T`는 제네릭 파라미터에 사용할 수 있다. 즉 **타입 내부에 직접 선언할 수 없다.**

```tsx
type Child<T, K extends keyof T> = {
  [k in K]: T[k]
}
```

반면, `k in keyof T`는 객체 키에 사용할 수 있다. 즉 **타입 내부에서 인덱스로 사용할 수 있다는 것이다.**

```tsx
type Child<T> = {
  [k in keyof T]: T[k]
}
```

## 2. readonly

타입 선언 시, 인덱스의 앞에 `readonly` 키워드를 붙이면 해당 값은 무조건 읽기 전용으로 사용된다. **따라서 다른 작업을 통해 처음에 넣었던 값을 바꿀 수 없다.**

```tsx
type Child = { readonly gender: string; age: number }
const boy: Child = { gender: "man", age: 13 }

boy.gender = "woman" // error
boy.age = 14 // true
```

## 3. 해답

```tsx
type MyReadonly<T> = {
  readonly [k in keyof T]: T[k]
}
```

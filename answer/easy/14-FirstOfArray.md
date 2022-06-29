# 14-FirstOfArray

## 1. Conditional Type

타입스크립트는 원하는 조건에 따라서 타입을 부여할 수 있다. 여기서 중요한 것은 `extends`가 `===`의 역할을 한다는 것이다.

```tsx
type Animal = { name: "cat" | "dog"; age: number }
type DogOrCat<T extends Animal> = T["name"] extends "dog" ? "cat" : "dog"
```

## 2. 풀이

```tsx
type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
```

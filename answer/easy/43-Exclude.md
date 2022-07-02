# 43-Exclude

## 1. Generic에서 T가 Union Type으로 들어올 때

T는 하나의 타입으로 고정된 것이 아니라 복수의 타입이 들어올 수 있다.

```ts
type Temp = string | number

type Test<T extends Temp> = {
  [k in T]: number
}

const test = <T extends Temp>(x: T, y: number) => ({ x: y })
test(1, 10)
test("abc", 11)
test(null, 12) // Error
```

만약 number와 string이 Union Type으로 연결된 상태라면 number와 string이 나열된 것이 아닌 **number도 될 수 있고 string도 될 수 있다라고 생각해야 한다.**

## 2. 풀이

```ts
type MyExclude<T extends any, U> = T extends U ? never : T
```

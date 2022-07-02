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

## 2. never타입의 의미

nerver타입의 의미는 다음과 같다.

- never타입은 절대 올 수 없는 타입을 나타낸다.
- 함수에서 항상 오류를 발생시키거나 절대 반환하지 않는 타입을 나타낼 때도 사용한다.
- 함수의 마지막에 도달할 수 없음을 의미한다.
- 모든 타입의 할당 가능한 하위 타입이다.

다음 예를 보자.

```ts
const fail = (message: string) => never = throw new Error(message);
const foo = (x: string) => boolean = typeof x === 'string' ? x : fail('error')

foo(1) // fail이 실행

const x: never = 1; // error
```

`foo`의 반환 타입으로 boolean을 설정하였지만 never를 반환하는 모습을 볼 수 있다. 만약 `fail`이 void였다면 `foo`는 에러를 냈을 것이다.

또한 never로 설정한 타입은 그 어떤 값도 할당할 수 없다.

## 3. 풀이

```ts
type MyExclude<T extends any, U> = T extends U ? never : T
```

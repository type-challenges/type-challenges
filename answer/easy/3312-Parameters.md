# 3312-Parameters

## 1. 타입스크립트에서 함수 파라미터의 타입 정의

타입스크립트는 실제로 `Parametes<T>`라는 유틸리티 타입이 존재한다. 해당 타입을 사용하여 파라미터 타입을 추출하였는데 다음과 같은 결과가 나왔다.

```tsx
const func = (payload:{ a: number; b: number}):number => payload.a + payload.b;
const MyType: Parameters<typeof func> = [{a: 1, b: 2}];
```

즉, 타입스크립트에서는 함수의 파라미터를 반환할 때 튜플에 형태로 반환한다.

다음은 파라미터의 타입을 튜플로 반환하는 이유이다. 두 개의 배열이나 튜플을 하나로 합쳐 새로운 배열로 반환하는 함수 `concat` 이 있다고 가정하자.

```tsx
const concat = (arr1, arr2) => [...arr1, ...arr2];
```

또한 첫 번째 원소를 제외하고 모든 원소를 반환하는 함수 `tail`이 있다고 가정하자.

```tsx
const tail = (arg) => {
	const [_, ...result] = arg;
	return result;
}
```

튜플이 생기기 전, 위의 두 개의 함수를 각각 타입으로 정의하기 위해 다음과 같은 짓을 벌여야 했다.

```tsx
function concat<A2>(arr1: [], arr2: [A2]): [A2];
function concat<A1, A2>(arr1: [A1], arr2: [A2]): [A1, A2];
function concat<A1, B1, A2>(arr1: [A1, B1], arr2: [A2]): [A1, B1, A2];
function concat<A1, B1, C1, A2>(arr1: [A1, B1, C1], arr2: [A2]): [A1, B1, C1, A2];
function concat<A1, B1, C1, D1, A2>(arr1: [A1, B1, C1, D1], arr2: [A2]): [A1, B1, C1, D1, A2];
function concat<A1, B1, C1, D1, E1, A2>(arr1: [A1, B1, C1, D1, E1], arr2: [A2]): [A1, B1, C1, D1, E1, A2];
function concat<A1, B1, C1, D1, E1, F1, A2>(arr1: [A1, B1, C1, D1, E1, F1], arr2: [A2]): [A1, B1, C1, D1, E1, F1, A2];
...

function tail<A1>(arg: [A1]): [];
function tail<A1, A2>(arg: [A1, A2]): [A1];
function tail<A1, B1, A2>(arg: [A1, B1, A2): [B1, A2];
...
```

이게 말이나 되는 일인가... 이걸 어느정도 해결할 수 있는 방법이 있긴 하다.

```tsx
function concat<T, U>(arr1: T[], arr2: U[]): Array<T | U>;
```

하지만 이 방법은 튜플을 사용할 때 필요한 입력 길이와 요소 순서에 대한 것을 표시하지 않았다.

TS 4.0에서는 추론 성능 개선과 위와 같은 경우를 타입화하기 위해서 튜플을 내놓았다.

첫번째 특징은 튜플 유형 구문의 스프레드가 일반화가 가능해졌다는 것이다. 이것은 튜플과 배열을 우리가 정확한 타입을 모르더라도 고차원적으로 표현이 가능하게 했다는 것이다. 이러한 튜플 유형에서 일반적인 스프레드가 객체화되면 다른 배열 및 튜플로써 다시 생성이 가능해진다.

이 말은, 이제 위와 같이 타입을 줄줄이 나열할 일이 사라졌다는 것이다.

```tsx
const tail<T extends any[]> = (arr: readonly [any, ...T]) => {
	const [_, ...rest] = arr;
	return rest;
}

const myTuple = [1, 2, 3, 4] as const;
const myArray = ["hello", "hi"];

const r1 = tail(myTuple); // [2, 3, 4]로 추론
const r2 = tail([...myTuple, ...myArray] as const); // [2, 3, 4, ...string[]]으로 추론
```

두번째 눈에 띄는 변화는 튜플에서 마지막 원소가 아니더라도 rest 연산자를 이용해 원소를 펼칠 수 있다는 것이다.

```tsx
type Strings = [string, string];
type Numbers = [number, number];
type StrStrNumNumBool = [...Strings, ...Numbers, boolean];
```

TS 4.0 이하에서는 이렇게 사용하면 에러를 띄웠다.

> A rest element must be last in a tuple type.
>

하지만 TS 4.0 부터는 이러한 강제성이 사라졌다. 우리가 알아야 하는 것은 튜플의 길이를 모를 때, spread 연산을 사용한다면 spread 연산 결과는 종속적이지 않고 우리가 전개한 대상으로 정해지게 된다.

```tsx
type Strings = [string, string];
type Numbers = number[];
type Unbounded = [...Strings, ...Numbers, boolean];
```

위의 두 가지 변화를 합치면 concat을 아래와 같이 표현할 수 있다.

```tsx
type Arr = readonly any[];
 
function concat<T extends Arr, U extends Arr>(arr1: T, arr2: U): [...T, ...U] {
  return [...arr1, ...arr2];
}
```

약간은 길지만 반복할 필요가 없고 튜플과 배열 모두 대응이 가능하다.

튜플은 다음과 같은 상황에서도 빛을 발한다.

```tsx
function partialCall(f, ...headArgs) {
  return (...tailArgs) => f(...headArgs, ...tailArgs);
}
```

`f`를 실행하기 위해 `headArgs`를 받아두고 실행해야 하는 시점에 `tailArgs`를 넣어서 결과를 얻는 함수이다.

TS 4.0에서는 rest를 이용하여 튜플과 배열을 전개할 수 있도록 하여서 타입을 추론 가능하게 만들었다.

```tsx
type Arr = readonly unknown[];
 
function partialCall<T extends Arr, U extends Arr, R>(
  f: (...args: [...T, ...U]) => R,
  ...headArgs: T
) {
  return (...tailArgs: U) => f(...headArgs, ...tailArgs);
}
```

다음은 실사용 예이다.

```tsx
const foo = (x: string, y: number, z: boolean) => {};
 
const f1 = partialCall(foo, 100); // Error, 문자열에 숫자 못 넣어요
 
const f2 = partialCall(foo, "hello", 100, true, "oops"); // Error, 인자로 4개 밖에 못 넣어요
 
const f3 = partialCall(foo, "hello"); // 실행
```

## 2. 풀이

```tsx
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer R) => any ? R : never;
```
# 8-Readonly2

## 1. 목표
`T`에 존재하는 속성 중, 속성으로 주어진 `K`만 `readonly`로 처리하고 나머지 속성은 수정 가능한 값으로 변환한다. K가 주어지지 않은 경우 `T`에 모든 속성을 `readonly`로 처리한다.

## 2. Exclude 타입
Exclude 타입은 T에 존재하는 속성 중, 개발자가 명시한 속성을 제외하고 남은 속성을 얻고 싶을 때 사용한다. ``속성의 키를 얻어온다는 것을 까먹지 말자.``
```ts
type Obj = {
    a: number;
    b: number;
    c: string;
};

type ExcludeC = Exclude<keyof Obj, 'c'>;

const obj1: { [key in ExcludeC]: number } = { a: 1, b: 2 };
const obj2: { [key in ExcludeC]: number } = { a: 1, b: 2, c: 'hi' }; // error, c는 없어야 함
``` 

## 3. 제네릭 타입에서 기본 타입 할당하기
TS는 타입에서 기본 타입을 할당하는 것을 허용한다.
```ts
type MyType<T extends { a : number; b: number; } = { a: number, b: number }> = T & { c : number };

const obj: MyType = { a: 1, b: 2, c : 3}; // obj는 { a: number; b: number; c: number; }
```
`MyType`에 제네릭으로 넣어야 할 부분에 그 어떤 타입도 넣어주지 않은 것을 확인할 수 있다.

## 4. 풀이
```ts
type MyReadonly2<T, K extends keyof T = keyof T> = { 
  readonly [key in K]: T[key]
} & {
  [key in Exclude<keyof T, K>]: T[key];
}
```
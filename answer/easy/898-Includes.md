# 898-Includes

## 1. T[keyof T]를 제대로 알고 쓰기
처음에는 다음과 같은 예제를 생각하였다
```ts
type Test<T extends readonly any[], U> = T[keyof T] extends U ? true : false;

const r5: Test3<[1, 2, 3], 1> = true; // 에러, false에는 true 할당 불가
```

틀린 이유를 분석하기 위해 `T[keyof T]`를 정의해 보았다.
```ts
type Test<T extends readonly any[]> = T[keyof T];

const arr = [1, 2, 3];
const r1: Test<[1, 2, 3], 1> = true;
const r2: Test<[1, 2, 3], 2> = true;
const r3: Test<[1, 2, 3], 3> = true;
const r4: Test<[1, 2, 3], 1> = false;
```
즉, T[keyof T]는 배열 내에 존재하는 아이템 중, 하나를 지칭하는 말이다.

#
따라서 처음 고민했던 풀이는 틀렸던 것이다. T의 아이템이 U와 같다고 항상 같은 결과를 낼 수 없다.

## 2. extends 동작 원리 이해하기
T extends U는 T가 U의 슈퍼셋인 경우에 동작한다. 따라서 다음과 같은 풀이는 틀린 풀이다.
```ts
type Includes<T extends readonly any[], U> = T extends [infer R, ...infer K] ? R extends U ? true : Includes<K, U> : false;

Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>; // true가 된다. 
```

따라서 `type-challenges`에서 제공하는 `Equal`이라는 타입을 사용하였다.

## 3. 풀이
```ts
import type { Equal } from '@type-challenges/utils'

type Includes<T extends readonly any[], U> = T extends [infer R, ...infer K] ? Equal<R, U> extends true ? true : Includes<K, U> : false;
```
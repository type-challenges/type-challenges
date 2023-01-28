# 12. MediumChainableOptions

## 1. declare의 역할
- 변수, 상수, 함수, 클래스가 어딘가에 이미 선언되어 있음을 알린다.
- 즉, js 코드로는 컴파일되지 않고, TS 컴파일러에게 타입 정보를 알리기만 한다.

쉽게 이야기해보자. 마냥ㄱ 컴파일러가 인식하지 못하는 JS 파일을 웹사이트에 추가했다고 하자. 해당 스크립트 파일은 실행되면서 api 메소드를 생성하고 이를 글로벌 스코프에 있는 어느 특정 스코프(`sthSdk`)에 할당한다.

만약 TS 코드에서 `sthSdk.doSth()`을 호출한다면 컴파일러는 해당 변수가 존재하는지 알지 못하기 때문에 컴파일 에러를 발생시킬 것이다.

이때 `declare` 키워드를 이용하면 해당 변수의 존재와 타입을 알릴 수 있다. 컴파일러는 해당 선언문을 다른 코드의 정적 타입 확인을 위해 사용할 뿐 JS로 컴파일 하지 않는다.

#

다음은 타입을 `declare`로 선언한 뒤 간단히 사용한 예제이다.

먼저 타입 `Animal`을 선언한 뒤, `declare`를 이용하여 `Dog`라는 타입이 `Animal`이라고 모든 파일에 공지를 하였다.

![스크린샷, 2023-01-28 17-57-33](https://user-images.githubusercontent.com/50985451/215257319-d7397a02-440a-4d72-b785-ee09a412357f.png)

그 다음 타입 `Dog`에 속성인 함수 `bark`를 함수 `bark`에 할당하였다. 함수 `bark`는 `Dog`에서 선언한 `bark`와 같은 타입으로 인식이 된다.

![스크린샷, 2023-01-28 18-09-35](https://user-images.githubusercontent.com/50985451/215257589-951b9091-3d26-4ce6-8fb0-f7accf0cb555.png)

현업에서는 JS로만 이루어진 라이브러리를 받아 타입을 선언할 때 유용하게 사용할 것 같다.

## 2. 풀이
```ts
type Chainable<T extends Record<string, any> = {}> = {
  option<K extends string, V extends any>(key: K, value: V):  Chainable<Omit<T, K> & Record<K, V>>;
  get(): T;
}
```

## 3. 해설
1. `option` 함수는 키가 중복으로 입력 되었을 경우, 이후에 들어온 값으로 Value를 교체해주어야 하기 때문에 `Chainable<Omit<T, K> & Record<K, V>>`라고 반환값을 표현하였다.
2. `get` 함수는 현재 재귀로써 돌고 있는 타입 전체를 반환하면 되기 때문에 `T`를 반환해준다.
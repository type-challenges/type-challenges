# 189-Awaited

## 1. infer를 사용하기

타입스크립트에서는 삼항 연산자와 유사한 방식으로 조건부 타입을 타이핑할 수 있다. 여기서 조건부 타입의 조건식이 참으로 평가될 때에는 `infer` 키워드를 사용할 수 있다.

> U가 추론 가능한 타입이면 참, 아니면 거짓

#

사용법은 다음과 같다.

```ts
T extends infer U ? X : Y
```

`infer`는 타입 조건부 타입에 `extends` 뒤에서만 사용할 수 있다.

#

`infer`를 사용하는 간단한 예제를 보자.

```ts
type MyType<T> = T extends infer R ? R : null
const a: MyType<number> = 123
alert(typeof a) // number
```

타입 변수 R은 `MyType`에서 받은 `number`가 되고, `infer` 키워드를 통해 타입 추론이 가능하게 된다.

근데 여기서 굳이 infer를 사용하지 않아도 `number`가 추론이 가능하도록 만들 수 있다. 이렇게 간단한 예제는 `MyType`을 `number`로 지정해서 사용하는 편이 더 나을 것이다.

```ts
type MyType<T> = T extends number ? number : null
const a: MyType<number> = 123
alert(typeof a) // number
```

#

다음은 `infer`를 사용하면 유용한 예이다.

```ts
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any

const fn = (num: number) => num.toString()

const a: ReturnType<typeof fn> = "Hello" // 유틸리티 타입 이용
console.log(a) //Hello
```

유틸리티 타입은 `ReturnType`을 이용하였다. 유틸리티 타입은 타입스크립트에서 기본적으로 제공하는 **공통 타입 반환을 위한 전역 타입**이다. 그리고 `ReturnType<T>`에서 `T`는 함수의 반환 타입으로 구성된 타입을 만든다.

간단히 보자면 다음과 같다.

```ts
declare function f1(): {
  a: string
  b: number
}

type T0 = ReturnType<() => string> // string
type T1 = ReturnType<(a: number) => string> // number
type T2 = ReturnType<typeof f1> // { a: string; b: number; }
```

이렇게 유틸리티 타입을 선언하면 전역으로 타입이 적용되어 따로 해당 타입(여기선 `ReturnType`)에 관해 명시할 필요가 없다.

즉, 아래와 같이 코드를 작성해도 `ReturnType<T>`는 유틸리티 함수이므로 원할히 타입을 얻을 수 있다.

```ts
const fn = (num: number) => num.toString()

const a: ReturnType<typeof fn> = "hello"
alert(a) // hello
```

vsCode에서 타입스크립트에 유틸리티 타입인 `ReturnType`이 어떻게 구성되어 있는지 확인해보면 다음과 같다.
<img src="https://user-images.githubusercontent.com/50985451/210353694-ab1ba1df-7124-4c3b-aa97-d90920939240.png
"/>

위에서 구현한 것과 같다.

**핵심은 유틸리티 타입의 `ReturnType`이 infer를 이용하여 만들어졌다는 것이다.**

#

만약 `infer`를 사용하지 않았다면 위에 코드는 다음과 같이 명시할 수 있을 것이다.

```ts
type ReturnType<T extends (...args: any) => any> = string

const fn = (num: number) => num.toString()
const a: ReturnType<typeof fn> = "Hello"
alert(a) // Hello
```

하지만 이렇게 된다면 `fn`의 리턴 값이 변경될 때마다 유니온 타입으로 수정해야 하는 불편함이 있다.

```ts
type ReturnType<T extends (...args: any) => any> = string | { a: number; b: number }; // 유니온 타입 이용

const fn = (a: number, b: number) => ({ a, b });
const a: ReturnType<typeof fn> = { a: 1, b: 2 };
console.log(a); { a: 1, b: 2 };
```

굉장히 비효율적이고 유지보수에도 극혐이다. 그래서 우리는 `infer`를 사용하여 타입을 정의하는 것이 아닌 타입을 추론시키는 것이다.

`typeof fn`은 매개변수의 타입은 `T`가 되는 것이고, `T`에 따른 `fn`의 결과값은 `R`이 됨을 모두 확신하여 추론하는 것이다.

이때, 함수 `fn`의 리턴 값이 `string` 타입이므로 `R` 또한 `string`이 되는 것이고 결국 `ReturnType<typeof fn>`은 `infer R ? R : any`에 의해 `infer string ? string : any`가 되어 `string`이 되는 것이다.

결론적으로, **타입을 따로 수정할 필요없이 오직 추론에 의해서 함수의 반환 타입에 의한 타입**을 만들 수 있게 되었다.

#

Promise 객체 안에 있는 값의 타입을 쉽게 꺼내고 싶을 때, `infer`를 이용하면 편하다. 런타임에 결정되는 타입을 손쉽게 정의하기 쉽다.

```ts
// ex1.
type UnpackPromiseArray<T> = T extends Promise<infer K>[] ? K : any

const arr = [Promise.resolve(true)]
type ExpectedBoolean = UnpackPromiseArray<typeof arr> // boolea

// ex2.
type PromiseType<T> = T extends Promise<infer U> ? U : never

type A = PromiseType<Promise<number>> // number
type B = PromiseType<Promise<string | number>> // string | number;
type C = Promise<number> // never
```

#

튜플 타입과 `infer`를 같이 쓰면 강력하다.

```ts
const func = (stundent: {
  name: string
  age: number
  hobbies: [string, string]
}) =>
  `이름은 ${student.name}이고 나이는 ${
    student.age
  }이다. 취미는 ${student.hobbies.join(", ")}이다.`

const data = { name: "땡콩", age: 12, hobbies: ["게임", "독서"] } // hobbies는 string[]으로 추론
func(data) // 에러, string[]은 [string, string]에 할당 불가
```

위의 예제에서 `infer`를 쓰면 손쉽게 해결이 가능하다.

```ts
// 위에 코드 생략
type FixArgType<T> = T extends (arg: infer K) => any ? K : any
const data: FixArgType = { name: "땡콩", age: 12, hobbies: ["게임", "독서"] }

func(data) // 잘 동작, hobbies는 [string, string]으로 추론이 됨
```

---

## 2. PromiseLike

`Promise`의 타입 정의는 다음과 같다.

```ts
// lib.2018.promise.d.ts
interface Promise<T> {
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>
}

// lib.es5.d.ts
interface Promise<T> {
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?:
      | ((value: T) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null
  ): Promise<TResult1 | TResult2>

  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(
    onrejected?:
      | ((reason: any) => TResult | PromiseLike<TResult>)
      | undefined
      | null
  ): Promise<T | TResult>
}
```

`PromiseLike`의 정의는 다음과 같다.

```ts
interface PromiseLike<T> {
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?:
      | ((value: T) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null
  ): PromiseLike<TResult1 | TResult2>
}
```

`Promise`는 `finally`만을 가지고 있고 `PromiseLike`는 `then`만을 가지고 있다.

#

아무튼 다시 돌아가서, `catch`가 없는 `PromiseLike`는 왜 존재하는 것일까? `Promise`가 정식 스펙이 되기 전, `Promise`를 구현하기 위한 다양한 라이브러리가 존재했었다. 이들은 표준이전에 태어나 `catch` 구문없이 `promise`를 처리하고 있었고, 타입스크립트는 이를 지원하기 위해서 `PromiseLike`를 만든 것이었다.

---

## 3. 정답

```ts
type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited<U> : T
```

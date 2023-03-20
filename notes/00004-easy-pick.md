```
Exported with AIPRM https://www.aiprm.com by J H on 2023. 3. 17. 오전 3:02:44
```

---

**User:**
export type Expect<T extends true> = T

export type Equal<X, Y> =
(<T>() => T extends X ? 1 : 2) extends
(<T>() => T extends Y ? 1 : 2) ? true : false

이렇게 두 가지의 타입이 있어.

---

**ChatGPT:**
안녕하세요. TypeScript 전문가 ChatGPT입니다.
주어진 코드는 TypeScript에서 제공되는 타입 연산자인 <code>extends</code>와 조건부 타입(conditional type)을 이용하여 타입을 비교하고, boolean 값을 반환하는 타입을 정의한 것입니다.
<code>Expect</code> 타입은 제네릭 타입 <code>T</code>가 <code>true</code> 타입을 상속하도록 제한한 후, <code>T</code>를 반환하는 타입입니다. 이는 <code>T</code>가 <code>true</code>일 경우 <code>Expect</code> 타입은 <code>true</code> 타입을 반환하고, 그렇지 않으면 에러를 발생시킵니다.
<code>Equal</code> 타입은 두 개의 제네릭 타입 <code>X</code>와 <code>Y</code>를 받아서, <code>X</code>와 <code>Y</code>가 같은 타입인지 비교하는 타입입니다. 이를 위해 두 개의 람다 함수를 정의하고, 각각 <code>X</code>와 <code>Y</code> 타입의 일치 여부를 <code>extends</code> 연산자를 이용하여 확인합니다. 그리고 두 개의 람다 함수가 같은 타입이면 <code>true</code> 타입을, 그렇지 않으면 <code>false</code> 타입을 반환합니다.
이렇게 <code>Expect</code>와 <code>Equal</code> 타입을 이용하면 TypeScript 코드에서 타입 비교를 간편하게 수행할 수 있습니다. 감사합니다.

---

**User:**
위의 Expect와 Equal 타입을 활용해서 코드를 만들었어.

첫 번째로 구현한 코드에서는 오류가 발생하지 않아
type MyPick<T, K extends keyof T> = {
[P in K]: T[P]
}
type cases = [Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>]

interface Todo {
title: string
description: string
completed: boolean
}

interface Expected2 {
title: string
completed: boolean
}

그런데 아래 두번째 코드에서는 "Type 'false' does not satisfy the constraint 'true'." 에러가 발생해.
type MyPick<T, K extends keyof T> = {
[P in K]: T[K]
}

왜 T[P]대신에 T[K]를 사용하면 오류가 발생하니?

---

**ChatGPT:**
먼저 두 코드 모두 <code>MyPick</code>이라는 제네릭 타입을 정의하고 있습니다. 이 타입은 객체 <code>T</code>와 객체 <code>T</code>의 키(key) 중 일부인 <code>K</code>를 입력 받아서, <code>K</code>에 해당하는 키-값 쌍만을 가지는 새로운 객체 타입을 반환하는 역할을 합니다.
첫 번째 코드에서는 <code>MyPick</code> 타입이 예상한 결과 타입 <code>Expected2</code>와 일치하는지를 검사하는 테스트 코드가 작성되어 있습니다. 이 코드는 <code>T</code>가 <code>Todo</code> 타입이고 <code>K</code>가 <code>"title" | "completed"</code> 타입일 때, <code>MyPick&lt;T, K&gt;</code> 타입이 <code>Expected2</code> 타입과 일치해야 한다는 것을 검증하는 것입니다.
이 코드에서 <code>MyPick</code> 타입은 매핑된 타입(mapped type)을 이용하여 구현되어 있습니다. <code>{ [P in K]: T[P] }</code>는 <code>T</code> 객체의 <code>K</code> 키 중 각각에 대해 <code>P</code>라는 새로운 키를 만들고, 해당 키의 값은 <code>T</code> 객체의 <code>P</code> 키의 값과 동일하게 되도록 타입 매핑을 수행합니다. 따라서 <code>{ title: string, completed: boolean }</code>와 같은 타입을 반환하게 됩니다.
두 번째 코드에서는 <code>MyPick</code> 타입의 구현이 조금 변경되었습니다. <code>{ [P in K]: T[K] }</code>는 <code>T</code> 객체의 <code>K</code> 키 중 각각에 대해 <code>P</code>라는 새로운 키를 만들고, 해당 키의 값은 <code>T</code> 객체의 <code>K</code> 키의 값과 동일하게 되도록 타입 매핑을 수행합니다. 이 코드에서 <code>P</code>와 <code>K</code>는 같은 타입으로 추론되므로, <code>T[P]</code> 대신에 <code>T[K]</code>를 사용하면서 <code>MyPick</code> 타입이 <code>{ title: string, completed: boolean }</code>와 같은 타입을 반환하게 됩니다.
그러나 <code>Equal</code> 타입은 <code>T[P]</code>가 <code>T[K]</code>와 같은지를 비교하고 있습니다. 이는 <code>T[P]</code>와 <code>T[K]</code>가 같은 타입이어야만 <code>Equal</code> 타입이 <code>true</code> 타입을 반환할 수 있습니다. 따라서 두 번째 코드에서 <code>Equal&lt;Expected2, MyPick&lt;Todo, "title" | "completed"&gt;&gt;</code> 타입은 <code>false</code> 타입을 반환하게 되어 "Type 'false' does not satisfy the constraint 'true'." 에러가 발생하는 것입니다.
결론적으로, 두 코드의 차이는 <code>T[P]</code>와 <code>T[K]</code>의 타입이 다르다는 것입니다. 따라서 <code>Equal</code> 타입이 반환하는 결과도 달라지게 됩니다.

---

**User:**
T[P]와 T[K]의 타입이 왜 달라져?
똑같이 { title: string, completed: boolean } 가 되는 것이 아니야?

---

**ChatGPT:**
<code>T[P]</code>와 <code>T[K]</code>의 타입이 다른 이유는 TypeScript에서 인덱스 시그니처(index signature)의 동작 방식 때문입니다.
인덱스 시그니처는 객체의 프로퍼티 이름과 타입을 동적으로 결정하는 기능을 제공합니다. 예를 들어, <code>{ [key: string]: any }</code>와 같은 인덱스 시그니처를 가지는 객체는 어떤 프로퍼티 이름이든 사용할 수 있으며, 값의 타입은 <code>any</code>로 추론됩니다.
하지만 이러한 동적인 타이핑 기능은 정적 타입 검사를 어렵게 만들 수 있습니다. 예를 들어, <code>{ [key: string]: any }</code> 타입의 객체에서 <code>obj.foo()</code>와 같은 코드는 TypeScript 컴파일러가 검사할 수 없습니다. 이는 <code>obj</code> 객체에는 <code>foo</code> 프로퍼티가 없는데도 불구하고, 인덱스 시그니처로 인해 이 코드가 유효하게 되기 때문입니다.
따라서 TypeScript는 객체의 타입 안정성을 보장하기 위해, 인덱스 시그니처와 명시적으로 정의된 프로퍼티 타입 간의 호환성을 검사합니다. 이를 위해 TypeScript는 인덱스 시그니처와 명시적으로 정의된 프로퍼티 타입 간에는 서로 호환 가능한 타입이어야 한다는 규칙을 적용합니다.
따라서, <code>T[P]</code>와 <code>T[K]</code>의 타입이 다르게 추론되는 이유는, <code>P</code>와 <code>K</code>가 서로 다른 타입으로 추론되기 때문입니다. 첫 번째 코드에서는 <code>P</code>가 <code>"title" | "completed"</code> 타입으로 추론되어, <code>T[P]</code>는 <code>{ title: string, completed: boolean }</code> 타입으로 추론됩니다. 반면에 두 번째 코드에서는 <code>K</code>가 <code>"title" | "completed"</code> 타입으로 추론되어, <code>T[K]</code>는 <code>string | boolean</code> 타입으로 추론됩니다.
따라서 <code>T[P]</code>와 <code>T[K]</code>는 서로 다른 타입이 되고, 이로 인해 <code>Equal</code> 타입이 <code>false</code>를 반환하게 됩니다.

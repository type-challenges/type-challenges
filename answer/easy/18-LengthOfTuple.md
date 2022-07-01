# 18-LengthOfTuple

## 1. const VS readonly

`const`는 **변수 참조**를 위해 나왔다.

```tsx
const ex = 123
ex = 345 // error
```

`readonly`는 **속성**을 위해 나왔다.

```tsx
type readonlyA = {
  readonly barB: { baz: string }
}

const y: readonlyA = { barB: { baz: "qa" } }
y.barB.baz = "qbbbb" // 가능
```

위와 같은 상황은 `**Readonly` 제네릭\*\*에도 해당된다.

```tsx
interface Outer {
  inner: {
    x: number
  }
}
const o: ReadOnly<Outer> = { inner: { x: 0 } }
o.inner = { x: 1 } // error
o.inner.x = 1 // 가능
```

이러한 상황을 막고자 `ts-essential`에 존재하는 `**DeepReadonly` 제네릭\*\*을 사용할 수 있다. 참고해보자.

## 2. 풀이

```tsx
type Length<T extends readonly any[]> = T["length"]
```

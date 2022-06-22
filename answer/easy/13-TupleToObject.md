# 13-TupleToObject 풀이

## 1. 배열을 객체로 보는 눈

**자바스크립트에서는 배열도 객체의 일종**이다. 따라서 우리가 **인덱싱에 사용하는 숫자들을 키 값으로 봐야 한다.**

```tsx
const arrs = ["a", "b", "c"]
const iterator = arrs.keys()

for (const item of iterator) {
  console.log(item)
}
// 0
// 1
// 2
```

## 2. key와 value를 같은 값으로 타입 선언하기

처음에는 key에 string을 넣은 채로 타입을 선언하였다. 그랬더니 key가 단순히 string으로 인식되고 당연히 value로 key를 넣었기 때문에 어떤 값을 넣어도 타입이 허용되었다.

```tsx
type BaboType = {
  [k in string]: k
}

const babo: BaboType = { babo: "babbbbo" } // 통과
```

쫌 더 짱구를 굴리다가 다음과 같은 코드를 생각하였다.

```tsx
type NiceType<key extends string> = {
  [k in Key]: k
}

const nice: NiceType<"nice"> = { nice: "cry" } // 에러, nice에는 nice만 와야 함
```

위와 같이 에러가 발생하는 이유는 `nice` 자체를 string이 아닌 상수로 인식했기 때문이다. 따라서 위와 같은 결과를 낳았다.

마지막으로 여러 값을 넣을 수 있는 객체의 타입까지 생각해보았다.

```tsx
const temp = { a: 1, b: 2, c: 3 }
const keySet = Object.keys(temp) as Array<keyof typeof temp>

type SmartType<T extends string[]> = {
  [k in T[number]]: k
}
const smart: SmartType<typeof keySet> = { a: "a", b: "b", c: "c" } // 통과
```

`keySet`에 타입 단언을 해준 이유는 `typeof`를 통해서 `temp`에 있는 key만을 배열의 원소로 사용하기 위해서이다. 이렇게 되면 string 타입이 아닌 상수 타입으로 배열이 선언되기 때문에 key를 value로 사용할 수 있다.

## 3. 풀이

```tsx
type TupleToObject<T extends readonly any[]> = {
  [k in T[number]]: k
}
```

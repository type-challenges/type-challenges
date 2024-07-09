<!--info-header-start--><h1>Tuple to Object <img src="https://img.shields.io/badge/-%EC%89%AC%EC%9B%80-7aad0c" alt="쉬움"/> <img src="https://img.shields.io/badge/-%23object--keys-999" alt="#object-keys"/></h1><blockquote><p>by sinoon <a href="https://github.com/sinoon" target="_blank">@sinoon</a></p></blockquote><p><a href="https://tsch.js.org/11/play/ko" target="_blank"><img src="https://img.shields.io/badge/-%EB%8F%84%EC%A0%84%ED%95%98%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="도전하기"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

배열(튜플)을 받아, 각 원소의 값을 key/value로 갖는 오브젝트 타입을 반환하는 타입을 구현하세요.

예시:

```ts
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

// answer1
type TupleToObject<T> = {
 [P keys of T] : P
}
/*
문제점
1. T의 타입 제한이 없음
  T는 어떤 타입이든 될 수 있습니다. 그러나 우리가 원하는 것은 배열(또는 튜플) 타입입니다. 타입 제한이 없으면 예상치 못한 타입이 올 수 있어 문제가 될 수 있습니다.
2. 잘못된 키워드 사용
  여기서 keys of T는 잘못된 구문입니다. 올바른 구문은 keyof T입니다. 하지만 keyof는 객체 타입의 키를 가져오는 데 사용되고, 배열의 경우에는 인덱스 시그니처가 필요합니다.
3. P의 사용
  P는 T의 요소가 되어야 합니다. keys of T는 잘못된 키워드이고, 우리가 원하는 것은 배열의 요소 타입입니다. 따라서 P는 T[number]로 접근해야 합니다.
*/

// answer2
type TupleToObject<T extends any[]> = {
   [P in T] : P
}
/*
문제점
 [P in T]: P 의 잘못된 사용
  이 구문은 P가 배열 T의 각 요소가 되는 것이 아니라, 배열 T의 인덱스를 의미합니다. 우리가 원하는 것은 배열의 각 요소를 키로 사용하는 것입니다.

올바른 접근 방법
  올바르게 타입을 정의하기 위해서는 배열의 각 요소를 키로 사용해야 합니다. 이를 위해 T[number]를 사용하여 배열 T의 요소 타입을 가져와야 합니다.

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};

위 코드에서
T extends readonly any[]는 T가 읽기 전용 배열(또는 튜플) 타입임을 보장합니다.
만약 변경 가능한 배열도 허용하고 싶다면 readonly를 제거할 수 있습니다.

[P in T[number]]는 T 배열의 각 요소 타입을 P로 순회하도록 합니다. 즉, T의 각 요소를 키로 사용합니다.
*/


```

<!--info-footer-start--><br><a href="../../README.ko.md" target="_blank"><img src="https://img.shields.io/badge/-%EB%8F%8C%EC%95%84%EA%B0%80%EA%B8%B0-grey" alt="돌아가기"/></a> <a href="https://tsch.js.org/11/answer/ko" target="_blank"><img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%EA%B3%B5%EC%9C%A0%ED%95%98%EA%B8%B0-teal" alt="정답 공유하기"/></a> <a href="https://tsch.js.org/11/solutions" target="_blank"><img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%EB%B3%B4%EA%B8%B0-de5a77?logo=awesome-lists&logoColor=white" alt="정답 보기"/></a> <hr><h3>관련된 문제들</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.ko.md" target="_blank"><img src="https://img.shields.io/badge/-10%E3%83%BBTuple%20to%20Union-d9901a" alt="10・Tuple to Union"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00472-hard-tuple-to-enum-object/README.md" target="_blank"><img src="https://img.shields.io/badge/-472%E3%83%BBTuple%20to%20Enum%20Object-de3d37" alt="472・Tuple to Enum Object"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00730-hard-union-to-tuple/README.md" target="_blank"><img src="https://img.shields.io/badge/-730%E3%83%BBUnion%20to%20Tuple-de3d37" alt="730・Union to Tuple"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/03188-medium-tuple-to-nested-object/README.md" target="_blank"><img src="https://img.shields.io/badge/-3188%E3%83%BBTuple%20to%20Nested%20Object-d9901a" alt="3188・Tuple to Nested Object"/></a> <!--info-footer-end-->

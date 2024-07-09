<!--info-header-start--><h1>First of Array <img src="https://img.shields.io/badge/-%EC%89%AC%EC%9B%80-7aad0c" alt="쉬움"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/14/play/ko" target="_blank"><img src="https://img.shields.io/badge/-%EB%8F%84%EC%A0%84%ED%95%98%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="도전하기"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

배열(튜플) `T`를 받아 첫 원소의 타입을 반환하는 제네릭 `First<T>`를 구현하세요.

예시:

```ts
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3

// answer1
type First<T extends readonly any[]> = {
 [P in T[0]] : P
}
/*
😛 문제점

코드는 원하는 결과를 제공하지 않습니다. 이 코드의 의미는 T 배열의 첫 번째 요소의 각 부분을 키로 사용하고,
그 값을 다시 같은 값으로 가지는 객체를 만드는 것입니다.
이는 의도한 "배열의 첫 번째 요소의 타입을 반환"하는 작업과는 다릅니다.

구체적으로 설명하자면, 다음과 같은 이유로 해당 코드는 잘못되었습니다:

T[0]은 배열 T의 첫 번째 요소의 타입을 나타내지만, P in T[0]은 해당 타입의 프로퍼티를 반복하는 것을 의미합니다.
이는 단일 타입이 아니라 그 타입의 키를 순회하는 의미로 잘못 사용된 것입니다.

배열의 첫 번째 요소의 타입을 단순히 반환하는 것이 목표인데, 이 코드는 객체를 만들려고 시도하고 있습니다.
*/




// answer2
type First<T extends readonly any[]> = T[0] extends [] ? never : T[0];
/*
😛 문제점 
배열의 첫 번째 요소의 타입을 반환하는데, 일부 상황에서는 의도한 대로 작동하지 않을 수 있습니다.

구체적으로, 이 코드는 배열의 첫 번째 요소가 빈 배열([])인 경우 never를 반환하고, 그렇지 않으면 첫 번째 요소의 타입을 반환합니다.
하지만 이 접근 방식에는 몇 가지 문제가 있습니다:

빈 배열 []의 타입과 첫 번째 요소가 빈 배열인 경우를 구분하지 않습니다.
비어 있는 배열 자체를 처리하지 않습니다.
올바른 제네릭 타입 정의는 배열이 비어 있는지 확인하고, 비어 있지 않다면 첫 번째 요소의 타입을 반환하는 것입니다.
이를 위해 조건부 타입과 infer 키워드를 사용하는 것이 더 적합합니다.

*/


// answer3
type First<T extends readonly any[]> = T extends [infer F, ...any[]] ? F : never;

/*
😊 설명

infer 키워드는 TypeScript의 조건부 타입에서 사용되는 기능으로, 타입을 추론할 수 있게 해줍니다.
infer는 특정 위치에서 타입을 추론할 수 있는 매개변수 역할을 합니다. 이를 통해 타입이 조건에 따라 결정될 때, 특정 부분의 타입을 변수에 할당할 수 있습니다.

T extends [infer F, ...any[]] ? F : never;의 경우, 이 코드는 배열 T가 적어도 하나의 요소를 가지고 있는지 검사합니다.
만약 그렇다면 첫 번째 요소의 타입을 F로 추론합니다. 그렇지 않다면 never 타입을 반환합니다.

구체적으로 살펴보면:

T extends [infer F, ...any[]]는 배열 T가 적어도 하나의 요소를 가지고 있는지 확인합니다.
만약 T가 [infer F, ...any[]]와 일치한다면, T의 첫 번째 요소의 타입을 F로 추론합니다.
infer F는 T의 첫 번째 요소의 타입을 F라는 이름으로 추론합니다.
- 조건이 참이면, ? F에 의해 첫 번째 요소의 타입을 반환합니다.
- 조건이 거짓이면, : never에 의해 never 타입을 반환합니다.

*/


```

<!--info-footer-start--><br><a href="../../README.ko.md" target="_blank"><img src="https://img.shields.io/badge/-%EB%8F%8C%EC%95%84%EA%B0%80%EA%B8%B0-grey" alt="돌아가기"/></a> <a href="https://tsch.js.org/14/answer/ko" target="_blank"><img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%EA%B3%B5%EC%9C%A0%ED%95%98%EA%B8%B0-teal" alt="정답 공유하기"/></a> <a href="https://tsch.js.org/14/solutions" target="_blank"><img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%EB%B3%B4%EA%B8%B0-de5a77?logo=awesome-lists&logoColor=white" alt="정답 보기"/></a> <hr><h3>관련된 문제들</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.ko.md" target="_blank"><img src="https://img.shields.io/badge/-15%E3%83%BBLast%20of%20Array-d9901a" alt="15・Last of Array"/></a> <!--info-footer-end-->

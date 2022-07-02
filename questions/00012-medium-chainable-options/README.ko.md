<!--info-header-start--><h1>Chainable Options <img src="https://img.shields.io/badge/-%EB%B3%B4%ED%86%B5-d9901a" alt="보통"/> <img src="https://img.shields.io/badge/-%23application-999" alt="#application"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/12/play/ko" target="_blank"><img src="https://img.shields.io/badge/-%EB%8F%84%EC%A0%84%ED%95%98%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="도전하기"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->


체인 가능 옵션은 일반적으로 Javascript에서 사용됩니다. 하지만 TypeScript로 전환하면 제대로 구현할 수 있나요?

이 챌린지에서는 `option(key, value)`과 `get()` 두가지 함수를 제공하는 객체(또는 클래스) 타입을 구현해야 합니다. 현재 타입을 `option`으로 지정된 키와 값으로 확장할 수 있고 `get`으로 최종 결과를 가져올 수 있어야 합니다.

예시

```ts
declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// 결과는 다음과 같습니다:
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}
```

문제를 해결하기 위해 js/ts 로직을 작성할 필요는 없습니다. 단지 타입 수준입니다.

`key`는 `string`만 허용하고 `value`는 무엇이든 될 수 있다고 가정합니다. 같은 `key`는 두 번 전달되지 않습니다.

<!--info-footer-start--><br><a href="../../README.ko.md" target="_blank"><img src="https://img.shields.io/badge/-%EB%8F%8C%EC%95%84%EA%B0%80%EA%B8%B0-grey" alt="돌아가기"/></a> <a href="https://tsch.js.org/12/answer/ko" target="_blank"><img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%EA%B3%B5%EC%9C%A0%ED%95%98%EA%B8%B0-teal" alt="정답 공유하기"/></a> <a href="https://tsch.js.org/12/solutions" target="_blank"><img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%EB%B3%B4%EA%B8%B0-de5a77?logo=awesome-lists&logoColor=white" alt="정답 보기"/></a> <!--info-footer-end-->
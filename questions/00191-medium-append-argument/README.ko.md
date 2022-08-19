<!--info-header-start--><h1>Append Argument <img src="https://img.shields.io/badge/-%EB%B3%B4%ED%86%B5-d9901a" alt="보통"/> <img src="https://img.shields.io/badge/-%23arguments-999" alt="#arguments"/></h1><blockquote><p>by Maciej Sikora <a href="https://github.com/maciejsikora" target="_blank">@maciejsikora</a></p></blockquote><p><a href="https://www.typescriptlang.org/play?#code/PQKgUABBCMCc0QLQQIIAc0FMB2ATVATgOYCuAtjgC6RKJ300BGAnhALICGAxgJaYBWEAMo8A1gHsCHCAAoAAmW59+AZzGSOASggBiQC89gVsXdHYuSoqaNHdYiAJycAc3ZaiAficAto4BHJiIAtVwBhDEQAMLgKHjEAAGAGLYIYA-NRAc2KxBoSghsoA3o4AMdYA4g7HxgClNAYGAIuMQgDgTgDqrgBqrgAOTEIBSo4Ay48WA3O0VgAc1ADQQroAlrQWALuOABy0QgIMDgAC1gGOjgK1DgBNNgCdNEIC8G4CQe5qAPp0QBoAuq6ERIcWA1TMQgBE9gB+TEIAe44AJ44A6HRCA2D0dSSHrgAotx2dXt3f5JYAkjYC1nQVioAZzsAOy2ADkHACljADoIIAP2sANZ2tHaRGKABxrABrjEEAhuuAGoHqsCnutABOdVUAk50XG4QQAps4AAGs22W+3j8iRCAHFnhBALsDgEZBipQ6FOCCACDHADtDAC4hSFpZRmFgVFwCDw0NQoLKsBAIhAALyyDjiiDYciMTAETqMA0qShK7BEbTagB8huNpqF6swEAASpgVCQADaUHWoDA4XAoUwUbCUAA8EXN4nEfswcSdNGAwAgmAAHlguJRMPgTXqDUayCazRALRArTaiJ0swbGAmk3F7U7S+WaNKQkKnX0IPYSvkANoKJQCNQSKQAXRkAAtKJQ0CpxemiDxKHOSIxoVxxGRgIpeBP1FJNLSIIBE8Z5ZQgw8AC2OAADrZwulyv07hMAA3aGUcSH7hJw0YAOFwL84i4AtEHdBUlRVRBs1NXgVB9RAAEcSB9SgeHEbBEAAFgI2AAFYuE0QAF0eyPpAF2hwAMFsACdGZlmWFewgNkNwACW3SiID0dIDVfZdV2ASgFTnaFVGhSQiGAOBoDAEBgDAZTQAgAB9DTNK0zSIAyciIEAFXnQQgQJAFIO9TtMstSIEU5T3WDLA8HDUhIxjONUCdXU4mYZSwFUqzLIgQAZRcAEqHAA6liBAAB5voQosgKdNsngyDQSRA3sgBvCAAFEMI4P1OiynNMDzCAAF8IAAMwIfcIAAcjkd1EC4Oc8qTW0fWAEhsL9FRarsuUPQAYQ4FCEF1dBHLDCMqGjGR9WdMtTXNS1rR4W02wW8t40TZNsAdMB7O9X0AzG4tNqWysVtretG2bXaNo7V0DoGiBhpQgAmIMJtDZyzCjWaNq-cQeFwToSDwTAKrWgt9sOn1-UoT7dRkBsIHBz8oewAtAeB3B+o1LgRp9INhxoQrcxjHKSDy6M3swaBOiOhHoAdB12jJoq82jKmabp97GfhgN3tZ9np18vyQDi+LrNmeoIEAC6bABGaqX4pspTQBoJ1AFQJwBXpogQBXmsAAnGKn4iBBPfESxIklQpOIWT4BA7AVAAd1NYAJE1iBdd403zeE0Tmut22ZLk4AVETLqcKdz3ZkAD06BxKQATloExchPTAPxMk6T3fEBSlKAA" target="_blank"><img src="https://img.shields.io/badge/-%EB%8F%84%EC%A0%84%ED%95%98%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="도전하기"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

주어진 함수 타입 `Fn`과 any 타입 `A` (여기서 any는 타입을 제한하지 않음을 뜻하고, 어떤 타입이든 상관없습니다 😉)를 통해 `Fn`을 첫 번째 인자로 받고, `A`를 두 번째 인자로 받는 제네릭 타입을 만드세요. 그리고 `Fn`과 거의 흡사하지만 `A`를 마지막 인자로 추가해서 받는 함수 타입 `G`를 생성하세요.

예시:

```typescript
type Fn = (a: number, b: string) => number

type Result = AppendArgument<Fn, boolean> 
// expected be (a: number, b: string, x: boolean) => number
```

> 이 문제는 [@maciejsikora](https://github.com/maciejsikora)가 작성한 [원글](https://dev.to/macsikora/advanced-typescript-exercises-question-4-495c)에서 이식되었습니다. 


<!--info-footer-start--><br>
<a href="../../README.ko.md" target="_blank"><img src="https://img.shields.io/badge/-%EB%8F%8C%EC%95%84%EA%B0%80%EA%B8%B0-grey" alt="돌아가기"/></a>
 <a href="https://tsch.js.org/191/answer/ko" target="_blank"><img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%EA%B3%B5%EC%9C%A0%ED%95%98%EA%B8%B0-teal" alt="정답 공유하기"/></a>
 <a href="https://tsch.js.org/191/solutions" target="_blank"><img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%EB%B3%B4%EA%B8%B0-de5a77?logo=awesome-lists&logoColor=white" alt="정답 보기"/></a> 

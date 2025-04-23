/*
  191 - Append Argument
  -------
  by Maciej Sikora (@maciejsikora) #보통 #arguments

  ### 질문

  함수 타입 `Fn`과 어떤 타입 `A`가 주어질 때 `Fn`의 인수와 `A`를 마지막 인수로 받는 `Fn`과 동일한 함수 유형인 `G`를 생성하세요.

  예시 :

  ```typescript
  type Fn = (a: number, b: string) => number

  type Result = AppendArgument<Fn, boolean>
  // 기대되는 결과는 (a: number, b: string, x: boolean) => number 입니다.
  ```

  > 이 문제는 [@maciejsikora](https://github.com/maciejsikora)가 작성한 [원문 글](https://dev.to/macsikora/advanced-typescript-exercises-question-4-495c)에서 발췌했습니다.

  > GitHub에서 보기: https://tsch.js.org/191/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type AppendArgument<Fn, A> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
  // @ts-expect-error
  AppendArgument<unknown, undefined>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/191/answer/ko
  > 정답 보기: https://tsch.js.org/191/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

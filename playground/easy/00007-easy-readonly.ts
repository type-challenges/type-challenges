/*
  7 - Readonly
  -------
  by Anthony Fu (@antfu) #쉬움 #built-in #readonly #object-keys

  ### 질문

  `T`의 모든 프로퍼티를 읽기 전용(재할당 불가)으로 바꾸는 내장 제네릭 `Readonly<T>`를 이를 사용하지 않고 구현하세요.

  예시:

  ```ts
  interface Todo {
    title: string
    description: string
  }

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  ```

  > GitHub에서 보기: https://tsch.js.org/7/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type MyReadonly<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/7/answer/ko
  > 정답 보기: https://tsch.js.org/7/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

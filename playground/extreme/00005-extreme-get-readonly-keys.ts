/*
  5 - Get Readonly Keys
  -------
  by Anthony Fu (@antfu) #매우 어려움 #utils #object-keys

  ### 질문

  객체의 readonly key 유니언을 반환하는 `GetReadonlyKeys<T>` 제네릭을 구현하세요.

  예시

  ```ts
  interface Todo {
    readonly title: string
    readonly description: string
    completed: boolean
  }

  type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
  ```

  > GitHub에서 보기: https://tsch.js.org/5/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type GetReadonlyKeys<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/5/answer/ko
  > 정답 보기: https://tsch.js.org/5/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

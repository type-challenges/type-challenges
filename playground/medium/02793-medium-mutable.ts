/*
  2793 - Mutable
  -------
  by jiangshan (@jiangshanmeta) #보통 #readonly #object-keys

  ### 질문

  Implement the generic ```Mutable<T>``` which makes all properties in ```T``` mutable (not readonly).

  For example

  ```typescript
  interface Todo {
    readonly title: string
    readonly description: string
    readonly completed: boolean
  }

  type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }

  ```

  > GitHub에서 보기: https://tsch.js.org/2793/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Mutable<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type List = [1, 2, 3]

type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
  Expect<Equal<Mutable<Readonly<List>>, List>>,
]

type errors = [
  // @ts-expect-error
  Mutable<'string'>,
  // @ts-expect-error
  Mutable<0>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/2793/answer/ko
  > 정답 보기: https://tsch.js.org/2793/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

/*
  19458 - SnakeCase
  -------
  by Gabriel Vergnaud (@gvergnaud) #어려움 #template-literal #string

  ### 질문

  Create a `SnakeCase<T>` generic that turns a string formatted in **camelCase** into a string formatted in **snake_case**.

  A few examples:

  ```ts
  type res1 = SnakeCase<"hello">; // => "hello"
  type res2 = SnakeCase<"userName">; // => "user_name"
  type res3 = SnakeCase<"getElementById">; // => "get_element_by_id"
  ```

  > GitHub에서 보기: https://tsch.js.org/19458/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type SnakeCase<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<SnakeCase<'hello'>, 'hello'>>,
  Expect<Equal<SnakeCase<'userName'>, 'user_name'>>,
  Expect<Equal<SnakeCase<'getElementById'>, 'get_element_by_id'>>,
  Expect<Equal<SnakeCase<'getElementById' | 'getElementByClassNames'>, 'get_element_by_id' | 'get_element_by_class_names'>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/19458/answer/ko
  > 정답 보기: https://tsch.js.org/19458/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

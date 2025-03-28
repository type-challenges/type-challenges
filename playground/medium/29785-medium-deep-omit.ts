/*
  29785 - Deep Omit
  -------
  by bowen (@jiaowoxiaobala) #보통 #omit object-keys deep

  ### 질문

  Implement a type`DeepOmit`, Like Utility types [Omit](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys), A type takes two arguments.

  For example:

  ```ts
  type obj = {
    person: {
      name: string;
      age: {
        value: number
      }
    }
  }

  type test1 = DeepOmit<obj, 'person'>    // {}
  type test2 = DeepOmit<obj, 'person.name'> // { person: { age: { value: number } } }
  type test3 = DeepOmit<obj, 'name'> // { person: { name: string; age: { value: number } } }
  type test4 = DeepOmit<obj, 'person.age.value'> // { person: { name: string; age: {} } }
  ```

  > GitHub에서 보기: https://tsch.js.org/29785/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type DeepOmit = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type obj = {
  person: {
    name: string
    age: {
      value: number
    }
  }
}

type cases = [
  Expect<Equal<DeepOmit<obj, 'person'>, {}>>,
  Expect<Equal<DeepOmit<obj, 'person.name'>, { person: { age: { value: number } } }>>,
  Expect<Equal<DeepOmit<obj, 'name'>, obj>>,
  Expect<Equal<DeepOmit<obj, 'person.age.value'>, { person: { name: string, age: {} } }>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/29785/answer/ko
  > 정답 보기: https://tsch.js.org/29785/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

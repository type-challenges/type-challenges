/*
  2949 - ObjectFromEntries
  -------
  by jiangshan (@jiangshanmeta) #어려움 #object

  ### 질문

  Implement the type version of ```Object.fromEntries```

  For example:

  ```typescript
  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }

  type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];

  type result = ObjectFromEntries<ModelEntries> // expected to be Model
  ```

  > GitHub에서 보기: https://tsch.js.org/2949/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type ObjectFromEntries<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type cases = [
  Expect<Equal<ObjectFromEntries<ModelEntries>, Model>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/2949/answer/ko
  > 정답 보기: https://tsch.js.org/2949/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #쉬움 #built-in #union

  ### 질문

  `T`에서 `U`에 할당할 수 있는 타입을 제외하는 내장 제네릭 `Exclude<T, U>`를 이를 사용하지 않고 구현하세요.

  예시:

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```

  > GitHub에서 보기: https://tsch.js.org/43/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

// 집합의 각 원소에 대해 extends 연산을 독립적으로 수행한 후 다시 결과를 합친다.
// 따라서 T extends U에서 T가 더 클 경우, U에 일치하는 원소들은 true case, U에 해당하지 않는 케이스는 false case에 대응할 것이다.
// 아래 식의 결과는 실제로 각 연산을 수행한 후 모든 결과를 합치므로 `never | false case의 원소 집합`가 된다.
type MyExclude<T, U> = T extends U ? never : T;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/43/answer/ko
  > 정답 보기: https://tsch.js.org/43/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

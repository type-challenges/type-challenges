/*
  13 - Hello World
  -------
  by Anthony Fu (@antfu) #워밍업

  ### 질문

  Hello, World!

  Type Challenges에서는 타입 단언(assertion)을 하기 위해 자체적인 타입 시스템을 사용합니다.

  이 과제에서는, 아래의 코드를 변경해서 테스트 코드를 통과하세요. (타입 체크 에러 없음).

  ```ts
  // string이 되어야 합니다.
  type HelloWorld = any
  ```

  ```ts
  // 아래의 테스트가 통과하도록 만드세요.
  type test = Expect<Equal<HelloWorld, string>>
  ```

  `Take the Challenge` 버튼을 클릭해서 코딩을 시작하세요! Happy Hacking!

  > GitHub에서 보기: https://tsch.js.org/13/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type HelloWorld = any // expected to be a string

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/13/answer/ko
  > 정답 보기: https://tsch.js.org/13/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

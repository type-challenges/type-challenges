/*
  847 - String Join
  -------
  by Matt Davis (@tl-matt-davis) #어려움

  ### 질문

  Create a type-safe string join utility which can be used like so:

  ```ts
  const hyphenJoiner = join('-')
  const result = hyphenJoiner('a', 'b', 'c'); // = 'a-b-c'
  ```

  Or alternatively:
  ```ts
  join('#')('a', 'b', 'c') // = 'a#b#c'
  ```

  When we pass an empty delimiter (i.e '') to join, we should concat the strings as they are, i.e:
  ```ts
  join('')('a', 'b', 'c') // = 'abc'
  ```

  When only one item is passed, we should get back the original item (without any delimiter added):
  ```ts
  join('-')('a') // = 'a'
  ```

  > GitHub에서 보기: https://tsch.js.org/847/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

declare function join(delimiter: any): (...parts: any[]) => any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

// Edge cases
const noCharsOutput = join('-')()
const oneCharOutput = join('-')('a')
const noDelimiterOutput = join('')('a', 'b', 'c')

// Regular cases
const hyphenOutput = join('-')('a', 'b', 'c')
const hashOutput = join('#')('a', 'b', 'c')
const twoCharOutput = join('-')('a', 'b')
const longOutput = join('-')('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h')

type cases = [
  Expect<Equal<typeof noCharsOutput, ''>>,
  Expect<Equal<typeof oneCharOutput, 'a'>>,
  Expect<Equal<typeof noDelimiterOutput, 'abc'>>,
  Expect<Equal<typeof twoCharOutput, 'a-b'>>,
  Expect<Equal<typeof hyphenOutput, 'a-b-c'>>,
  Expect<Equal<typeof hashOutput, 'a#b#c'>>,
  Expect<Equal<typeof longOutput, 'a-b-c-d-e-f-g-h'>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/847/answer/ko
  > 정답 보기: https://tsch.js.org/847/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

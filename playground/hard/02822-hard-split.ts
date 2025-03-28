/*
  2822 - Split
  -------
  by Andrea Simone Costa (@jfet97) #어려움 #string #split #array #tuple

  ### 질문

  The well known `split()` method splits a string into an array of substrings by looking for a separator, and returns the new array. The goal of this challenge is to split a string, by using a separator, but in the type system!

  For example:

  ```ts
  type result = Split<'Hi! How are you?', ' '>  // should be ['Hi!', 'How', 'are', 'you?']
  ```

  > GitHub에서 보기: https://tsch.js.org/2822/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Split<S extends string, SEP extends string> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Split<'Hi! How are you?'>, ['Hi! How are you?']>>,
  Expect<Equal<Split<'Hi! How are you?', 'z'>, ['Hi! How are you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ' '>, ['Hi!', 'How', 'are', 'you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ''>, ['H', 'i', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']>>,
  Expect<Equal<Split<'', ''>, []>>,
  Expect<Equal<Split<'The sine in cosine', 'in'>, ['The s', 'e ', ' cos', 'e']>>,
  Expect<Equal<Split<'Never say never, forever and ever.', 'ver'>, ['Ne', ' say ne', ', fore', ' and e', '.']>>,
  Expect<Equal<Split<'', 'z'>, ['']>>,
  Expect<Equal<Split<''>, ['']>>,
  Expect<Equal<Split<string, 'whatever'>, string[]>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/2822/answer/ko
  > 정답 보기: https://tsch.js.org/2822/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

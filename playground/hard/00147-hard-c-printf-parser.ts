/*
  147 - C-printf Parser
  -------
  by Pig Fang (@g-plane) #어려움 #template-literal

  ### 질문

  There is a function in C language: `printf`. This function allows us to print something with formatting. Like this:

  ```c
  printf("The result is %d.", 42);
  ```

  This challenge requires you to parse the input string and extract the format placeholders like `%d` and `%f`. For example, if the input string is `"The result is %d."`, the parsed result is a tuple `['dec']`.

  Here is the mapping:

  ```typescript
  type ControlsMap = {
    c: 'char',
    s: 'string',
    d: 'dec',
    o: 'oct',
    h: 'hex',
    f: 'float',
    p: 'pointer',
  }
  ```

  > GitHub에서 보기: https://tsch.js.org/147/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ParsePrintFormat<''>, []>>,
  Expect<Equal<ParsePrintFormat<'Any string.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %%d.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %%%d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %f.'>, ['float']>>,
  Expect<Equal<ParsePrintFormat<'The result is %h.'>, ['hex']>>,
  Expect<Equal<ParsePrintFormat<'The result is %q.'>, []>>,
  Expect<Equal<ParsePrintFormat<'Hello %s: score is %d.'>, ['string', 'dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %'>, []>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/147/answer/ko
  > 정답 보기: https://tsch.js.org/147/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

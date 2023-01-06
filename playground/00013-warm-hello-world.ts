/*
  13 - Hello World
  -------
  by Anthony Fu (@antfu) #warm-up

  ### Question

  Hello, World!

  In Type Challenges, we use the type system itself to do the assertion.

  For this challenge, you will need to change the following code to make the tests pass (no type check errors).

  ```ts
  // expected to be string
  type HelloWorld = any
  ```

  ```ts
  // you should make this work
  type test = Expect<Equal<HelloWorld, string>>
  ```

  Click the `Take the Challenge` button to start coding! Happy Hacking!

  > View on GitHub: https://tsch.js.org/13
*/

/* _____________ Your Code Here _____________ */

type HelloWorld = string // expected to be a string

/* _____________ Test Cases _____________ */
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/13/answer
  > View solutions: https://tsch.js.org/13/solutions
  > More Challenges: https://tsch.js.org
*/

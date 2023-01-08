/*
  2 - Get Return Type
  -------
  by Anthony Fu (@antfu) #medium #infer #built-in

  ### Question

  Implement the built-in `ReturnType<T>` generic without using it.

  For example

  ```ts
  const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }

  type a = MyReturnType<typeof fn> // should be "1 | 2"
  ```

  > View on GitHub: https://tsch.js.org/2
*/

/* _____________ Your Code Here _____________ */

type MyReturnType<T> = any

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>,
]

type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}

const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, w: any) => v ? 1 : 2

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2/answer
  > View solutions: https://tsch.js.org/2/solutions
  > More Challenges: https://tsch.js.org
*/

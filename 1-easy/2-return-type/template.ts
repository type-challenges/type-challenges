// your code here

// type MyReturnType<T extends (...args: any) => any> = T

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}

type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>
]

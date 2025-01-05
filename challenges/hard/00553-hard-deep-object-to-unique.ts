/*
  553 - Deep object to unique
  -------
  by null (@uid11) #hard #deep

  ### Question

  TypeScript has structural type system, but sometimes you want a function to accept only some previously well-defined unique objects (as in the nominal type system), and not any objects that have the required fields.

  Create a type that takes an object and makes it and all deeply nested objects in it unique, while preserving the string and numeric keys of all objects, and the values of all properties on these keys.

  The original type and the resulting unique type must be mutually assignable, but not identical.

  For example,

  ```ts
  import { Equal } from "@type-challenges/utils"

  type Foo = { foo: 2; bar: { 0: 1 }; baz: { 0: 1 } }

  type UniqFoo = DeepObjectToUniq<Foo>

  declare let foo: Foo
  declare let uniqFoo: UniqFoo

  uniqFoo = foo // ok
  foo = uniqFoo // ok

  type T0 = Equal<UniqFoo, Foo> // false
  type T1 = UniqFoo["foo"] // 2
  type T2 = Equal<UniqFoo["bar"], UniqFoo["baz"]> // false
  type T3 = UniqFoo["bar"][0] // 1
  type T4 = Equal<keyof Foo & string, keyof UniqFoo & string> // true
  ```

  > View on GitHub: https://tsch.js.org/553
*/

/* _____________ Your Code Here _____________ */

type DeepObjectToUniq<O extends object> = any

/* _____________ Test Cases _____________ */
import type { Equal, IsFalse, IsTrue } from '@type-challenges/utils'

type Quz = { quz: 4 }

type Foo = { foo: 2, baz: Quz, bar: Quz }
type Bar = { foo: 2, baz: Quz, bar: Quz & { quzz?: 0 } }

type UniqQuz = DeepObjectToUniq<Quz>
type UniqFoo = DeepObjectToUniq<Foo>
type UniqBar = DeepObjectToUniq<Bar>

declare let foo: Foo
declare let uniqFoo: UniqFoo

uniqFoo = foo
foo = uniqFoo

type cases = [
  IsFalse<Equal<UniqQuz, Quz>>,
  IsFalse<Equal<UniqFoo, Foo>>,
  IsTrue<Equal<UniqFoo['foo'], Foo['foo']>>,
  IsTrue<Equal<UniqFoo['bar']['quz'], Foo['bar']['quz']>>,
  IsFalse<Equal<UniqQuz, UniqFoo['baz']>>,
  IsFalse<Equal<UniqFoo['bar'], UniqFoo['baz']>>,
  IsFalse<Equal<UniqBar['baz'], UniqFoo['baz']>>,
  IsTrue<Equal<keyof UniqBar['baz'], keyof UniqFoo['baz']>>,
  IsTrue<Equal<keyof Foo, keyof UniqFoo & string>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/553/answer
  > View solutions: https://tsch.js.org/553/solutions
  > More Challenges: https://tsch.js.org
*/

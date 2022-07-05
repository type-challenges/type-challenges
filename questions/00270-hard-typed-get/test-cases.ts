import type { Equal, Expect } from '@type-challenges/utils'

type Splice<K extends string,R extends string[] = []> = K extends `${infer F}.${infer L}` ? Splice<L,[...R,F]> : [...R,K & string]


type Get<T, K extends string,P extends string[] = Splice<K>> = 
  P['length'] extends 1 
  ? T[P[0] & keyof T] 
  : P extends [string,...infer L extends string[]] 
    ? Get<T[P[0] & keyof T], K , L>
    : never

type cases = [
  Expect<Equal<Get<Data, 'hello'>, 'world'>>,
  Expect<Equal<Get<Data, 'foo.bar.count'>, 6>>,
  Expect<Equal<Get<Data, 'foo.bar'>, { value: 'foobar'; count: 6 }>>,

  Expect<Equal<Get<Data, 'no.existed'>, never>>,
]

type Data = {
  foo: {
    bar: {
      value: 'foobar'
      count: 6
    }
    included: true
  }
  hello: 'world'
}

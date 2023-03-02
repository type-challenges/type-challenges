import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'



const simple = {
  a: {}
}

const deep = {
  a: {
    b: {
      c: 123
    }
  }
}


type cases = [
  Expect<Equal<FlattenObject<typeof simple>, { 'a': {} }>>,
  Expect<Equal<FlattenObject<typeof deep>, { 'a/b/c': string }>>
]

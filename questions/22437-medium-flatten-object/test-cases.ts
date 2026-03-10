import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type FlattenObject = any

const simple = {
  a: {}
}

const deep = {
  a: {
    b: {
      c: 123,
      d: '123'
    }
  }
}

const duplicate = {
  "a.b.c": true,
  a: {
    b: {
      c: 123,
      d: '123'
    }
  }
}

type cases = [
  Expect<Equal<FlattenObject<typeof simple>, { 'a': {} }>>,
  Expect<Equal<FlattenObject<typeof deep>, { 'a.b.c': number, 'a.b.d': string }>>,
  Expect<Equal<FlattenObject<typeof duplicate>, {
    'a.b.c': boolean
  }
    | {
      'a.b.c': number
      'a.b.d': string
    }>>
]

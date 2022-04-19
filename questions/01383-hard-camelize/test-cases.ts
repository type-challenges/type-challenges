import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<
  Camelize<{
    some_prop: string
    prop: { another_prop: string }
    array: [{ snake_case: string }]
  }>,
  {
    someProp: string
    prop: { anotherProp: string }
    array: [{ snakeCase: string }]
  }
  >>,
]

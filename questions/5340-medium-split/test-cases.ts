import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Split<"p-i-n-e", "-">, ["p", "i", "n", "e"]>>,
  Expect<Equal<Split<"happy coding", "-">, ["happy coding"]>>,
  Expect<Equal<Split<"apple">, ["a", "p", "p", "l", "e"]>>
]

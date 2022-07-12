import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

interface Todo {
  title: string
  description: string
  foo(): string
  bar(name: string): string
}

type cases = [
  Expect<Equal<PickFunction<Todo>, {
    foo(): string
    bar(name: string): string
  }>>
]

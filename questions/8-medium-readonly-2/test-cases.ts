import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Equal<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
]

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}

import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const

const tree2 = {
  val: 1,
  left: null,
  right: null,
} as const

const tree3 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
} as const

const tree4 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null
  }
} as const

type cases = [
  Expect<Equal<InorderTraversal<null>, []>>,
  Expect<Equal<InorderTraversal<typeof tree1>, [1, 3, 2]>>,
  Expect<Equal<InorderTraversal<typeof tree2>, [1]>>,
  Expect<Equal<InorderTraversal<typeof tree3>, [2, 1]>>,
  Expect<Equal<InorderTraversal<typeof tree4>, [1, 2]>>,
]

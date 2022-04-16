import type { Equal, Expect } from '@type-challenges/utils'

type PreObject = {
  pre_a: "pre_a",
  other_test: "other_test",
  pre_b: "pre_b",
  start_hello: 'start_hello'
}

type cases = [
  Expect<Equal<PickByPrefix<'pre', PreObject>, Pick<PreObject, 'pre_a' | "pre_b">>>,
  Expect<Equal<PickByPrefix<'pre' | 'start', PreObject>, Omit<PreObject, 'other_test'>>>,
  Expect<Equal<PickByPrefix<'', PreObject>, PreObject>>,
]

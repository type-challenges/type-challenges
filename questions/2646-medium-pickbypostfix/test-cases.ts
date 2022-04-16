import type { Equal, Expect } from '@type-challenges/utils'

type PostObject = {
  a_post: "a_post",
  other_test: "other_test",
  b_post: "b_post",
  hello_end: 'hello_end'
}

type cases = [
  Expect<Equal<PickByPostfix<'post', PostObject>, Pick<PostObject, 'a_post' | "b_post">>>,
  Expect<Equal<PickByPostfix<'post' | 'end', PostObject>, Omit<PostObject, 'other_test'>>>,
  Expect<Equal<PickByPostfix<'', PostObject>, PostObject>>,
]

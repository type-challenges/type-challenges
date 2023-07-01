import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<AppendEachForEach<[[1, 2], [3, 4]], 5>, [[1, 2, 5], [3, 4, 5]]>>,
  Expect<Equal<AppendEachForEach<[[1, 2], [3, 4]], [5, 6]>, [[1, 2, 5], [1, 2, 6], [3, 4, 5], [3, 4, 6]]>>,
  Expect<Equal<AppendEachForEach<[[1, 2], [3, 4]], [[5, 6], 7]>, [[1, 2, 5], [1, 2, 6], [1, 2, 7], [3, 4, 5], [3, 4, 6], [3, 4, 7]]>>,
]

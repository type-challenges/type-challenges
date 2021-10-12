import { Equal, Expect} from '@type-challenges/utils'

type cases = [
    Expect<Equal<Permutation<'a' | 'b' | 'c', 1>, ['a'] | ['b'] | ['c']>>,
    Expect<Equal<Permutation<'a' | 'b' | 'c', 2>, ['a', 'b'] | ['a', 'c'] | ['b', 'a'] | ['b', 'c'] | ['c', 'a'] | ['c', 'b']>>
]

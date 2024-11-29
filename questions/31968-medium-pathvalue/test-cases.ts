import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<PathValue<typeof data, 'user.name'>, 'Alice'>>,
  Expect<Equal<PathValue<typeof data, 'user.address.city'>, 'Wonderland'>>,
  Expect<Equal<PathValue<typeof data, 'user'>, typeof data.user>>,
  Expect<Equal<PathValue<typeof data, ''>, never>>,
  Expect<Equal<PathValue<typeof data, 'user.number'>, never>>,
]

const data = {
  user: {
    name: 'Alice',
    age: 30,
    address: {
      city: 'Wonderland',
    },
  },
} as const;

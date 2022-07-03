import type { Equal, Expect } from '@type-challenges/utils'

type Has<T extends string, U extends string> =  U extends T ? true : false

type cases = [
  Expect<Equal<Has<TimeUnion, 'YYYY-MM-DD HH:mm:ss'>, true>>,
  Expect<Equal<Has<TimeUnion, 'YYYY-MM-DD'>, true>>,
  Expect<Equal<Has<TimeUnion, 'HH:mm:ss'>, true>>,
  Expect<Equal<Has<TimeUnion, 'YYYY-DD HH:mm:ss'>, true>>,
  Expect<Equal<Has<TimeUnion, 'YYYY-MM HH:mm:ss'>, true>>,
  Expect<Equal<Has<TimeUnion, 'YYYY HH:mm:ss'>, true>>,
  Expect<Equal<Has<TimeUnion, 'YYYY-MM-DD HH:ss'>, true>>,
]
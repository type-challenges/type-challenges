import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

function func(fn: (args: string) => string): string

function func(num: number, init: Set<string>): boolean

function func(...args: unknown[]): string | boolean {
  const [fnOrNum, init] = args as OverloadedParameters<typeof func>

  if (typeof fnOrNum === 'function') {
    return fnOrNum("foo")
  } else {
    return fnOrNum === init.size
  }
}

func((s) => `Hello ${s}`)
func(1, new Set<string>('Hi'))

type cases = [
  Expect<Equal<OverloadedParameters<typeof func>, [(args: string) => string, never] | [number, Set<string>]>>,
]

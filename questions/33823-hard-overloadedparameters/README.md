TypeScript’s `Parameters` don’t support overloaded functions, causing issues with type narrowing and undefined parameters during destructuring. The goal is to create utility types that extract parameters from all overloads, eliminating the need for `?.` and `!.` after type narrowing.

```
function func(fn: (arg: string) => string): string

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
```

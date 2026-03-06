import type { Equal, Expect } from '@type-challenges/utils'

export type Resource = 'mouse' | 'face' | 'body'

export type MethodDeps = {
  speak: 'mouse'
  reset: null        // null: reset resource set to the initial full set
  set: void          // void: consume nothing
  expression: 'face'
  motion: 'body'
  action: 'face' | 'body'
  all: 'mouse' | 'face' | 'body'
}

class G {
  speak() { return this }
  set() { return this }
  get reset() { return this }
  expression() { return this }
  motion() { return this }
  action() { return this }
  all() { return this }
}

// target: make chain resource-safe
declare const g: ChainableMethodGuard<G>

// valid chains (no type errors expected)
g.set().set().speak().expression().motion().set()
  .reset.speak().action().set()
  .reset
  .reset.all().set()
  .reset.speak()

//  invalid chains (should be type errors)

// after taking 'face', 'action' still needs 'face' | 'body' but 'face' is consumed
// @ts-expect-error
g.expression().action()

// after taking 'body', 'all' needs 'mouse' | 'face' | 'body' but 'body' is consumed
// @ts-expect-error
g.motion().all()

// after taking 'all' (mouse+face+body), 'action' is not allowed until reset
// @ts-expect-error
g.all().action()

// spot check: members outside the dependency map should remain intact
type _KeepOriginalMembers = Expect<Equal<
  keyof ChainableMethodGuard<G>,
  keyof G
>>

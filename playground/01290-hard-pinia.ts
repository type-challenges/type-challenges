/*
  1290 - Pinia
  -------
  by Pig Fang (@g-plane) #hard #this #vue

  ### Question

  Create a type-level function whose types is similar to [Pinia](https://github.com/posva/pinia) library. You don't need to implement function actually, just adding types.

  ### Overview

  This function receive only one parameter whose type is an object. The object contains 4 properties:

  - `id` - just a string (required)
  - `state` - a function which will return an object as store's state (required)
  - `getters` - an object with methods which is similar to Vue's computed values or Vuex's getters, and details are below (optional)
  - `actions` - an object with methods which can do side effects and mutate state, and details are below (optional)

  ### Getters

  When you define a store like this:

  ```typescript
  const store = defineStore({
    // ...other required fields
    getters: {
      getSomething() {
        return 'xxx'
      }
    }
  })
  ```

  And you should use it like this:

  ```typescript
  store.getSomething
  ```

  instead of:

  ```typescript
  store.getSomething()  // error
  ```

  Additionally, getters can access state and/or other getters via `this`, but state is read-only.

  ### Actions

  When you define a store like this:

  ```typescript
  const store = defineStore({
    // ...other required fields
    actions: {
      doSideEffect() {
        this.xxx = 'xxx'
        return 'ok'
      }
    }
  })
  ```

  Using it is just to call it:

  ```typescript
  const returnValue = store.doSideEffect()
  ```

  Actions can return any value or return nothing, and it can receive any number of parameters with different types.
  Parameters types and return type can't be lost, which means type-checking must be available at call side.

  State can be accessed and mutated via `this`. Getters can be accessed via `this` but they're read-only.

  > View on GitHub: https://tsch.js.org/1290
*/

/* _____________ Your Code Here _____________ */

declare function defineStore(store: unknown): unknown

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const store = defineStore({
  id: '',
  state: () => ({
    num: 0,
    str: '',
  }),
  getters: {
    stringifiedNum() {
      // @ts-expect-error
      this.num += 1

      return this.num.toString()
    },
    parsedNum() {
      return parseInt(this.stringifiedNum)
    },
  },
  actions: {
    init() {
      this.reset()
      this.increment()
    },
    increment(step = 1) {
      this.num += step
    },
    reset() {
      this.num = 0

      // @ts-expect-error
      this.parsedNum = 0

      return true
    },
    setNum(value: number) {
      this.num = value
    },
  },
})

// @ts-expect-error
store.nopeStateProp
// @ts-expect-error
store.nopeGetter
// @ts-expect-error
store.stringifiedNum()
store.init()
// @ts-expect-error
store.init(0)
store.increment()
store.increment(2)
// @ts-expect-error
store.setNum()
// @ts-expect-error
store.setNum('3')
store.setNum(3)
const r = store.reset()

type _tests = [
  Expect<Equal<typeof store.num, number>>,
  Expect<Equal<typeof store.str, string>>,
  Expect<Equal<typeof store.stringifiedNum, string>>,
  Expect<Equal<typeof store.parsedNum, number>>,
  Expect<Equal<typeof r, true>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1290/answer
  > View solutions: https://tsch.js.org/1290/solutions
  > More Challenges: https://tsch.js.org
*/

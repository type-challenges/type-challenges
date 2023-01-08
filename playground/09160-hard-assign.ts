/*
  9160 - Assign
  -------
  by zhangxiaofan (@workkk98) #hard #object #array

  ### Question

  You have a target object and a source array of objects. You need to copy property from source to target, if it has the same property as the source, you should always keep the source property, and drop the target property. (Inspired by the `Object.assign` API)

  ### example

  ```ts
  type Target = {
    a: 'a'
  }

  type Origin1 = {
    b: 'b'
  }

  // type Result = Assign<Target, [Origin1]>
  type Result = {
    a: 'a'
    b: 'b'
  }
  ```


  ```ts
  type Target = {
    a: 'a'
    d: {
      hi: 'hi'
    }
  }

  type Origin1 = {
    a: 'a1',
    b: 'b'
  }


  type Origin2 = {
    b: 'b2',
    c: 'c'
  }

  type Answer = {
     a: 'a1',
     b: 'b2',
     c: 'c'
     d: {
        hi: 'hi'
    }
  }
  ```

  > View on GitHub: https://tsch.js.org/9160
*/

/* _____________ Your Code Here _____________ */

type Assign<T extends Record<string, unknown>, U> = any

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

// case1
type Case1Target = {}

type Case1Origin1 = {
  a: 'a'
}

type Case1Origin2 = {
  b: 'b'
}

type Case1Origin3 = {
  c: 'c'
}

type Case1Answer = {
  a: 'a'
  b: 'b'
  c: 'c'
}

// case2
type Case2Target = {
  a: [1, 2, 3]
}

type Case2Origin1 = {
  a: {
    a1: 'a1'
  }
}

type Case2Origin2 = {
  b: [2, 3, 3]
}

type Case2Answer = {
  a: {
    a1: 'a1'
  }
  b: [2, 3, 3]
}

// case3

type Case3Target = {
  a: 1
  b: ['b']
}

type Case3Origin1 = {
  a: 2
  b: {
    b: 'b'
  }
  c: 'c1'
}

type Case3Origin2 = {
  a: 3
  c: 'c2'
  d: true
}

type Case3Answer = {
  a: 3
  b: {
    b: 'b'
  }
  c: 'c2'
  d: true
}

// case 4
type Case4Target = {
  a: 1
  b: ['b']
}

type Case4Answer = {
  a: 1
  b: ['b']
}

type cases = [
  Expect<Equal<Assign<Case1Target, [Case1Origin1, Case1Origin2, Case1Origin3]>, Case1Answer>>,
  Expect<Equal<Assign<Case2Target, [Case2Origin1, Case2Origin2]>, Case2Answer>>,
  Expect<Equal<Assign<Case3Target, [Case3Origin1, Case3Origin2]>, Case3Answer>>,
  Expect<Equal<Assign<Case4Target, ['', 0]>, Case4Answer>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9160/answer
  > View solutions: https://tsch.js.org/9160/solutions
  > More Challenges: https://tsch.js.org
*/

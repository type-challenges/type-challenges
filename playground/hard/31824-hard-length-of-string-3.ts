/*
  31824 - Length of String 3
  -------
  by Eosellmay Li (@E0SelmY4V) #hard

  ### Question

  Implement a type `LengthOfString<S>` just like `Array#length`:

  Differing to two previous challenges about strings' length, this times the type must support strings about $10^6$ characters long, which makes it more challenging.

  > View on GitHub: https://tsch.js.org/31824
*/

/* _____________ Your Code Here _____________ */

type LengthOfString<S extends string> = any

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Deced = [10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
type Signum = Deced[number]
type Reped<
  S extends string,
  C extends Signum,
  R extends string = '',
>
  = (C extends 0
    ? R
    : Reped<S, Deced[C], `${R}${S}`>
  )
type t0 = 'k'
type t1 = Reped<t0, 10>
type t2 = Reped<t1, 10>
type t3 = Reped<t2, 10>
type t4 = Reped<t3, 10>
type t5 = Reped<t4, 10>
type t6 = Reped<t5, 10>
type Gened<N extends string> = N extends `${''
  }${infer N6 extends Signum
  }${infer N5 extends Signum
  }${infer N4 extends Signum
  }${infer N3 extends Signum
  }${infer N2 extends Signum
  }${infer N1 extends Signum
  }${infer N0 extends Signum
  }` ? `${''
  }${Reped<t6, N6>
  }${Reped<t5, N5>
  }${Reped<t4, N4>
  }${Reped<t3, N3>
  }${Reped<t2, N2>
  }${Reped<t1, N1>
  }${Reped<t0, N0>
  }` : never

type cases = [
  Expect<Equal<LengthOfString<Gened<'0000000'>>, 0>>,
  Expect<Equal<LengthOfString<Gened<'0000001'>>, 1>>,
  Expect<Equal<LengthOfString<Gened<'0000002'>>, 2>>,
  Expect<Equal<LengthOfString<Gened<'0000003'>>, 3>>,
  Expect<Equal<LengthOfString<Gened<'0000004'>>, 4>>,
  Expect<Equal<LengthOfString<Gened<'0000005'>>, 5>>,
  Expect<Equal<LengthOfString<Gened<'0000055'>>, 55>>,
  Expect<Equal<LengthOfString<Gened<'0000555'>>, 555>>,
  Expect<Equal<LengthOfString<Gened<'0005555'>>, 5555>>,
  Expect<Equal<LengthOfString<Gened<'0055555'>>, 55555>>,
  Expect<Equal<LengthOfString<Gened<'8464592'>>, 8464592>>,
  Expect<Equal<LengthOfString<Gened<'1373690'>>, 1373690>>,
  Expect<Equal<LengthOfString<Gened<'1707793'>>, 1707793>>,
  Expect<Equal<LengthOfString<Gened<'0196268'>>, 196268>>,
  Expect<Equal<LengthOfString<Gened<'6646734'>>, 6646734>>,
  Expect<Equal<LengthOfString<Gened<'0538159'>>, 538159>>,
  Expect<Equal<LengthOfString<Gened<'0058901'>>, 58901>>,
  Expect<Equal<LengthOfString<Gened<'8414001'>>, 8414001>>,
  Expect<Equal<LengthOfString<Gened<'1740697'>>, 1740697>>,
  Expect<Equal<LengthOfString<Gened<'2281441'>>, 2281441>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/31824/answer
  > View solutions: https://tsch.js.org/31824/solutions
  > More Challenges: https://tsch.js.org
*/

enum Cmp {
  L,  // Less than
  E,  // Equal to
  G,  // Greater than
}

/* Calculations */

type Add<A extends number, B extends number> = any

type Minus<A extends number, B extends number> = any

type Negative<T extends number> = any

type Abs<T extends number> = any

type Max<A extends number, B extends number> = any

type Min<A extends number, B extends number> = any

/* Comparisons */

type Compare<A extends number, B extends number> = any

type Gt<A extends number, B extends number> = any

type Lt<A extends number, B extends number> = any

type Eq<A extends number, B extends number> = any

type GtE<A extends number, B extends number> = any

type LtE<A extends number, B extends number> = any

type Neq<A extends number, B extends number> = any

type IsNegative<T extends number> = any

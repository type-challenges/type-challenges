import type { Equal, Expect } from '@type-challenges/utils';

type A1 = { a: string };
type E1 = { a: string };
type D1 = DefinedPartial<A1>;
type C1 = Expect<Equal<D1, E1>>;

type A2 = { a: string; b: number };
type E2 = { a: string } | { b: number } | { a: string, b: number };
type D2 = DefinedPartial<A2>;
type C2 = Expect<Equal<D2, E2>>;

type A3 = { a: string; b: number; c: boolean };
type E3 = { a: string } | { b: number } | { c: boolean }
  | { a: string, b: number } | { a: string; c: boolean } | { b: number; c: boolean }
  | { a: string; b: number; c: boolean };
type D3 = DefinedPartial<A3>;
type C3 = Expect<Equal<D3, E3>>;

type A4 = { a: 1; b: 2; c: 3; d: 4 };
type E4 = { a: 1 } | { b: 2 } | { c: 3 } | { d: 4 }
  | { a: 1, b: 2 } | { a: 1; c: 3 } | { a: 1; d: 4 } | { b: 2; c: 3 } | { b: 2; d: 4} | { c: 3; d: 4 }
  | { a: 1; b: 2; c: 3 } | { a: 1; b: 2; d: 4 } | { a: 1; c: 3; d: 4 } | { b: 2; c: 3; d: 4 }
  | { a: 1; b: 2; c: 3; d: 4 };
type D4 = DefinedPartial<A4>;
type C4 = Expect<Equal<D4, E4>>;


type A5 = { a: 1; b: 2; c: 3; d: 4; e: 5 };
type E5 = { a: 1 } | { b: 2 } | { c: 3 } | { d: 4 } | { e: 5 }
  | { a: 1, b: 2 } | { a: 1; c: 3 } | { a: 1; d: 4 } | { a: 1; e: 5 } | { b: 2; c: 3 }
  | { b: 2; d: 4 } | { b: 2; e: 5 } | { c: 3; d: 4 } | { c: 3; e: 5 } | { d: 4; e: 5 }
  | { a: 1; b: 2; c: 3 } | { a: 1; b: 2; d: 4 } | { a: 1; b: 2; e: 5 } | { a: 1; c: 3; d: 4 } | { a: 1; c: 3; e: 5 }
  | { a: 1; d: 4; e: 5 } | { b: 2; c: 3; d: 4 } | { b: 2; c: 3; e: 5 } | { b: 2; d: 4; e: 5 } | { c: 3; d: 4; e: 5 }
  | { a: 1; b: 2; c: 3; d: 4 } | { a: 1; b: 2; c: 3; e: 5 } | { a: 1; b: 2; d: 4; e: 5 } | { a: 1; c: 3; d: 4; e: 5 } | { b: 2; c: 3; d: 4; e: 5 }
  | { a: 1; b: 2; c: 3; d: 4; e: 5 };
type D5 = DefinedPartial<A5>;
type C5 = Expect<Equal<D5, E5>>;

type Big = Record<'a01' | 'a02' | 'a03' | 'a04' | 'a05' | 'a06' | 'a07' | 'a08' | 'a09' | 'a10' | 'a11' | 'a12' | 'a13' | 'a14' | 'a15' | 'a16' | 'a17', 1>;
type DPBig = DefinedPartial<Big>;

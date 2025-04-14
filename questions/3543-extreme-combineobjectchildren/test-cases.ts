import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type Question = {
    one: {
        a: string;
        b: string;
        c: string;
    };
    two: {
        a: string;
        b: string;
        d: string;
    };
    three: {
        a: string;
        b: string;
        e: string;
    };
}

type Answer = {
    a: string;
    b: string;
    c?: string;
    d?: string;
    e?: string;
}

type cases = [
  Expect<Equal<Answer, CombineObjectChildren<Question>>>,
  Expect<Equal<CombineObjectChildren<{a: {b: number}, c: {d: string}}>, {b?: number  ; d?: string}>>,
  Expect<Equal<CombineObjectChildren<{a: {b: string}, c: {b: string}}>, {b: string;}>>,
  Expect<Equal<CombineObjectChildren<{a: {b: string}, c: {b: string, d: number}}>, {b: string; d?: number}>>,
  Expect<Equal<CombineObjectChildren<{a: {b: string}, c: {b: number, d: number}}>, {b: string | number; d?: number}>>,
]

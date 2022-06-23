import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils';

type TupleToNestedObject<T, U> = T extends [infer F, ...infer R]
  ? {
      [key in F & string]: TupleToNestedObject<R, U>;
    }
  : U;

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<
    Equal<
      TupleToNestedObject<['a', 'b', 'c'], boolean>,
      { a: { b: { c: boolean } } }
    >
  >,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
];

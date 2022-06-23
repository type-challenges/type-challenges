import { Equal, Expect } from '@type-challenges/utils';

type Traversal<T> = T extends [infer F, ...infer L]
  ? F extends Promise<infer Deep>
    ? [Deep, ...Traversal<L>]
    : [F, ...Traversal<L>]
  : T;

declare function PromiseAll<T extends readonly any[]>(
  values: readonly [...T],
): Promise<Traversal<T>>;

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
];

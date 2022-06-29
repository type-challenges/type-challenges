import type { Equal, Expect, NotEqual } from '@type-challenges/utils';

type Flip<T> = {
  [K in keyof T as T[K] extends keyof any
    ? T[K]
    : `${T[K] & (bigint | boolean | null | undefined)}`]: K;
};

type cases = [
  Expect<Equal<{ a: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<NotEqual<{ b: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<Equal<{ 3.14: 'pi'; true: 'bool' }, Flip<{ pi: 3.14; bool: true }>>>,
  Expect<
    Equal<{ val2: 'prop2'; val: 'prop' }, Flip<{ prop: 'val'; prop2: 'val2' }>>
  >,
];

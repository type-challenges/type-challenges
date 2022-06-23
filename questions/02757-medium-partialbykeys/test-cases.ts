import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils';

type Copy<T> = {
  [K in keyof T]: T[K];
};

type PartialByKeys<T, K = keyof T> = Copy<
  {
    [P in keyof T as P extends K ? never : P]: T[P];
  } &
    {
      [P in K as P extends keyof T ? P : never]?: P extends keyof T
        ? T[P]
        : never;
    }
>;

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
];

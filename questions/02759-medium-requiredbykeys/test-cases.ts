import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils';

type Copy<T> = {
  [K in keyof T]: T[K];
};

type RequiredByKeys<T, K = keyof T> = Copy<
  {
    [P in keyof T as P extends K ? never : P]: T[P];
  } &
    {
      [P in keyof T as P extends K ? P : never]-?: T[P];
    }
>;

interface User {
  name?: string;
  age?: number;
  address?: string;
}

interface UserRequiredName {
  name: string;
  age?: number;
  address?: string;
}

interface UserRequiredNameAndAge {
  name: string;
  age: number;
  address?: string;
}

type cases = [
  Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
];

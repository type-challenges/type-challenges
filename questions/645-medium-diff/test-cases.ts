import { Equal, Expect } from '@type-challenges/utils';

type Diff<O, O1> = {
  [K in keyof O | keyof O1 as K extends keyof O & keyof O1
    ? never
    : K]: K extends keyof O ? O[K] : K extends keyof O1 ? O1[K] : never;
};

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};

type cases = [Expect<Equal<Diff<Foo, Bar>, { gender: number }>>];

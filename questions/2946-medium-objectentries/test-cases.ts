import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils';

type ObjectEntries<T> = {
  [P in keyof T]-?: [
    P,
    Exclude<T[P], undefined> extends never ? T[P] : Exclude<T[P], undefined>,
  ];
}[keyof T];

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ['name', string]
  | ['age', number]
  | ['locations', string[] | null];

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
];

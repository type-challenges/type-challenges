import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];


type cases = [
  Expect<Equal<ObjectFromEntries<ModelEntries>,Model>>,
]

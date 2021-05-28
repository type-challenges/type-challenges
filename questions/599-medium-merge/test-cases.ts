import { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
};

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
	a: number;
	b: number;
  }>>
]

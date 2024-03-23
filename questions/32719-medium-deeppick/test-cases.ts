import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'


type User = {
  name: string;
  age: number;
  pets: {
    cat: { nickname: string; age: number };
    dog: { nickname: string; age: number };
  };
};

type cases = [
  Expect<Equal<DeepPick<User, 'pets.cat.nickname'>, { pets: { cat: { nickname: string } } }>>,
  Expect<Equal<DeepPick<User, 'pets.cat'>, { pets: { cat: { nickname: string; age: number } } }>>,
  Expect<Equal<DeepPick<User, 'pets.cat.age' | 'pets.cat.nickname'>, { pets: { cat: { nickname: string; age: number } } }>>,
  Expect<Equal<DeepPick<User, 'age'>, { age: number }>>
]

type errors = [
// @ts-expect-error: '"NON_EXISTENT_KEY"' is not assignable to type '"pets.cat.nickname" | "name" | "age" | "pets" | "pets.cat" | "pets.dog" | "pets.cat.age" | "pets.dog.age" | "pets.dog.nickname"'
  Equal<DeepPick<User, 'NON_EXISTENT_KEY'>>
]

/*
Sometimes, you may want to lookup for a type in a union to by their attributes.

Get the corresponding type by searching for the common type field in the union Cat | Dog.
In other words, we will expect to get Dog for LookUp<Dog | Cat, 'dog'> and Cat for LookUp<Dog | Cat, 'cat'>.

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
*/

type LookUp<U, T> = U extends { type: T } ? U : never

// { type: T } matches the union you want in the interface you pass it
// So, { type: T } is the argument we're looking up
// U extends {type: T} evaluates distributively
/*
Distributive Conditional Types:
If we plug a union type into ToArray, then the conditional type will be applied to each member of that union.
type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>;
type StrArrOrNumArr = string[] | number[]
*/

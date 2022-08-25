/*
Merge two types into a new type.
Keys of the second type overrides keys of the first type.

For example

type foo = {
  name: string;
  age: string;
}
type coo = {
  age: number;
  sex: string
}

type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}
*/

type Merge<F, S> = {
  [Key in keyof F | keyof S]: Key extends keyof S
    ? S[Key]
    : Key extends keyof F
      ? F[Key]
      : never
}

// The new type's key will either be in F or S
// The value will be whatever value is assigned to the Key in S
// So, if the Key exists in S, assign that value
// Otherwise the Key will be associated with a value in F
// If the Key exists in F, assign that value
// Otherwise, do nothing - it's finished

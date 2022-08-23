/*
Implement a generic DeepReadonly<T> which make every parameter of an object -
and its sub-objects recursively - readonly.

You can assume that we are only dealing with Objects in this challenge.
Arrays, Functions, Classes and so on do not need to be taken into consideration.
However, you can still challenge yourself by covering as many different cases as possible.

For example:
type X = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = {
  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey'
}

type Todo = DeepReadonly<X> // should be same as `Expected`
*/

type List = string | number | boolean | undefined | null | Function

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends List ? T[K] : DeepReadonly<T[K]>
}

// create a list of the types we want to work with
// make each key in T readonly
// extend each of those keys from List, and if true return the key into this object
// otherwise recursively call DeepReadonly and assign the key

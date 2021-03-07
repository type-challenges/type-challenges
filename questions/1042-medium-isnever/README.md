Implement a type IsNever, which takes input type T.
If the type of resolves to never, return true , otherwise false.

For example:

```
type A = IsNever<never>  // expected to be true
type B = IsNever<undefined> // expected to be false
type C = IsNever<null> // expected to be false
type D = IsNever<[]> // expected to be false
type E = IsNever<number> // expected to be false


```

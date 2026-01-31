Implements the equal operator that returns a boolean for whether the two given types are equal. 

For example:

```ts
type X1 = 1
type Y1 = 1
type T1 = IsEqual<X1, Y1> // expected to be true

type X2 = 1
type Y2 = 2
type T2 = IsEqual<X2, Y2> // expected to be false
```

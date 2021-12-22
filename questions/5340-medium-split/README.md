Implement the type version of String.split, Split<T, U> takes an String T, string U and returns the Array T array that is separated by U.

```ts
type Res = Split<"p-i-n-e", "-">; // expected to be ['p', 'i', 'n', 'e']
type Res1 = Split<"happy coding", "-">; // expected to be ['happy coding']
type Res2 = Split<"apple">; // expected to be ['a', 'p', 'p', 'l', 'e']
```

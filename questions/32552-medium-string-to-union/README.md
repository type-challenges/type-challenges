Implement a type `StringToUnion`, а type takes two arguments.

Example: 

```ts
type test1 = StringToUnion<'1', ','> // '1'
type test2 = StringToUnion<'1,2,3', ','> // '1' | '2' | '3'
type test3 = StringToUnion<'1:2:3', ':'> // '1' | '2' | '3'
type test4 = StringToUnion<'first,second', ','> // 'first' | 'second'
```

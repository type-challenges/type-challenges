Implement a stringifier mimicking `JSON.stringify` at the type-level.

```ts
type Result = Stringify<{
  0: [ { toJSON: () => 0 }, [[1]], { outer: { inner: 2 } } ],
  a: 'a',
  b: { bb: false },
  c: undefined
}>;

type Expected = `{"0":[0,[[1]],{"outer":{"inner":2}}],${'"a":"a","b":{"bb":false}' | '"b":{"bb":false},"a":"a"'}}`;
```

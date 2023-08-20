Implement a type that extract prop value to the interface. The type takes the two arguments. The output should be an object with the prop values.
  Prop value is object.

  For example

```ts
type Test = { id: '1', myProp: { foo: '2' }}
type Result = ExtractToObject<Test, 'myProp'> // expected to be { id: '1', foo: '2' }
```

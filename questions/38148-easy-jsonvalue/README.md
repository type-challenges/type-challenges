Create a type `JSONValue` that represents all possible JSON values.

For example:

```ts
const valid: JSONValue = {
  name: 'Alice',
  age: 30,
  active: true,
  scores: [1, 2, 3],
  address: {
    city: 'Wonderland',
    zip: null,
    coordinates: { lat: 51.5, lng: -0.1 },
  },
  friends: [
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 28 },
  ],
}
```

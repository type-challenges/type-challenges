Assuming you have and object of type
```ts
{
   "id": number,
   "foo": {
        "id": number,
        "data": {
            "id": number,
            "prop1": any,
            "prop2": any
        }
   }
}
```

and we want to remove the nesting of the data to get a type
```ts
{
   "id": number,
   "foo": {
        "id": number,
        "prop1": any,
        "prop2": any
   }
}
```

Should also work with deeper levels of nesting e.g.

```ts
interface DeepModel {
  'id': number,
  'foo': {
    'id': number,
    'data': {
      'id': number,
      'prop1': any,
      'prop2': any,
      'bar': {
        'id': number,
        'data': {
          'id': number,
          'prop1': any,
          'prop2': any,
        }
      }
    }
  }
}
```
should be reduced to
```ts
interface ReducedDeepModel {
  'id': number,
  'foo': {
    'id': number,
    'prop1': any,
    'prop2': any,
    'bar': {
      'id': number,
      'prop1': any,
      'prop2': any,
    }
  }
}
```

Sometimes, you may want to lookup for a type in a union to by their attributes. 

In this challenge, I would like to have get the couponing type by searching for the common `type` field in the union `Cat | Dog`. In other words, I will expect to get `Dog` for `LookUp<Dog | Cat, 'dog'>` and `Cat` for `LookUp<Dog | Cat, 'cat'>` in the following example.

```ts
interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

const MyDog = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
```

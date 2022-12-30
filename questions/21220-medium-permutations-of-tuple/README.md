Given a generic tuple type `T extends unknown[]`, write a type which produces all permutations of `T` as a union.

For example:

```ts
PermutationsOfTuple<[1, number, unknown]>
/**
 * Should return:
 * | [1, number, unknown]
 * | [1, unknown, number]
 * | [number, 1, unknown]
 * | [unknown, 1, number]
 * | [number, unknown, 1]
 * | [unknown, number ,1]
 */ 
```

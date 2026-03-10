Given a tuple which length is $3n$.

Split it into 3 sub-tuples, both have $n$ elements. The order of elements should be kept.

For example

```ts
type A = SplitTupleInto3<[boolean,123n,'type-challenges']>
//[[boolean], [123n], ['type-challenges']
type B = SplitTupleInto3<[1,2,3,4,5,6]>
//[[1,2], [3,4], [5,6]]
```

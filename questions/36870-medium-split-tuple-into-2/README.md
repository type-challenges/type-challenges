Given a tuple **which length is even**, let's say $2n$.

Split it into 2 sub-tuples with first $n$ elements in the first one, and last $n$ elements in the last one.

For example

```ts
type A = SplitTupleInto2<[0,1,2,3,4, 5,6,7,8,9]>
//[[0,1,2,3,4], [5,6,7,8,9]]
type B = SplitTupleInto2<["a","b","c", "d","e","f"]>
//[["a","b","c"], ["d","e","f"]]
```

Given a 2D arrays, i.e. an array of arrays, and an element `E`, we want to append each array with `E`. For example
```
AppendEachForEach<[[1, 2], [3, 4]], 5>  // Expect to be [[1, 2, 5], [3, 4, 5]]
```

However, notice `E` could be an array, in which case, we would like to append each given array with each item `e` in `E`. 
```
AppendEachForEach<[[1, 2], [3, 4]], [5, 6]>   // Expect to be [[1, 2, 5], [1, 2, 6], [3, 4, 5], [3, 4, 6]]
```

`E` could also be nested. For example,
```
AppendEachForEach<[[1, 2], [3, 4]], [[5, 6], 7]>
// Expect to be [[1, 2, 5], [1, 2, 6], [1, 2, 7], [3, 4, 5], [3, 4, 6], [3, 4, 7]]
```

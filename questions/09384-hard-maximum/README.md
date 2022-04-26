### Description
Implements a type `Maximum`,  get array like type `T`, and return max value in `T`

`0 <= T[number] < 1000`, so **nagative number not considered**.

If `T` is a empty array `[]`, just reutrn `never`

```ts
Maximum<[]> // never
Maximum<[0, 2, 1]> // 2
Maximum<[1, 20, 200, 150]> // 200
```
### Advanced
Can you implement type `Minimum` inspired by `Maximum`?

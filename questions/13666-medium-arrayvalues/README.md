For example: 

```
type MyArr = ["hello","world",1,1]
type T0 = ArrayValues<MyArr> // "hello" | "world" | 1;

const arrVariable = ["hello","world",1]
type T1 = ArrayValues<typeof arrVariable> // string | number;
```

Implement a type-safe version of the function composition pipe() function. pipe() takes a series of functions as an argument and returns a function with the arguments of the first and the return-type of the last.

A simple JS implementation would be:
```ts
const pipe = (...fns: (() => any)[]) => (...args: any[]) => fns.reduce((p, c) => [c.apply(null, p)], args);
  
const stringToArray = (str: string) => Array.from(str);
const reverseArray = (arr: any[]) => arr.reverse();
const arrayToString = (arr: string[]) => arr.join("");

const reverseString = pipe(stringToArray, reverseArray, arrayToString); // should be (str: string) => string
// same as (str: string) => arrayToString(reverseArray(stringToArray(str)))
```

It creates a pipeline, hence the name. Each function passes its return value to the next function. Running reverseString(str) would result in: 
  
stringToArray(str) -> reverseArray(arr) -> arrayToString(arr)

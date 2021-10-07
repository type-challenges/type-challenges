Combine two types to combine a new union type(shallow type)

For example:

```ts
type M1 = {
    a:string,
    b:string,
    c:string
}

type M2 = {
    a:number,
    c:boolean
}

/**
 *
 * M1 merge M2 type to
 * {
 *    a:string|number,
 *    b:string,
 *    c:boolean|boolean
 * }
 * /
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/268/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/268/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
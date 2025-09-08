<!--info-header-start--><h1>Unbox <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/> <img src="https://img.shields.io/badge/-%23promise-999" alt="#promise"/> <img src="https://img.shields.io/badge/-%23function-999" alt="#function"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>by Julian Coy <a href="https://github.com/eXamadeus" target="_blank">@eXamadeus</a></p></blockquote><p><a href="https://tsch.js.org/32427/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

How can we build a type that "unboxes" arrays, functions, promises, and tuples?

Example:

```typescript
Unbox<string> // string
Unbox<()=>number> // number
Unbox<boolean[]> // boolean
Unbox<Promise<boolean>> // boolean
```

Bonus: Can we make it recursive?

```typescript
Unbox<() => () => () => () => number> // number
```

Double Bonus: Can we control the recursion?

```typescript
Unbox<() => () => () => () => number, 3> // () => number
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/32427/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/32427/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
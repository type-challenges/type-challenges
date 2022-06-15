<!--info-header-start--><h1>Greater Than <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>by ch3cknull <a href="https://github.com/ch3cknull" target="_blank">@ch3cknull</a></p></blockquote><p><a href="https://tsch.js.org/4425/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`

Negative numbers do not need to be considered.

For example

```ts
GreaterThan<2, 1> //should be true
GreaterThan<1, 1> //should be false
GreaterThan<10, 100> //should be false
GreaterThan<111, 11> //should be true
```

answer

```ts
type Plus<T extends number | string, A extends number[] = []> = `${T}` extends `${A["length"]}` ? A : Plus<T, [0, ...A]>;

type Minus<T extends number | string, U extends any[] = [], A extends number[] = []> = `${T}` extends `${A["length"]}` ? U : U extends [infer U1, ...infer U2] ? Minus<T, U2, [0, ...A]> : U;

type SubstractZero<T extends number | string, U extends number | string> = Minus<U, Plus<T>>;

type GreaterThan<T extends number | string, U extends number | string> = `${T}` extends `${infer T1}${infer T2}` ? 
  `${U}` extends `${infer U1}${infer U2}` ? 
  T1 extends U1 ? GreaterThan<T2, U2> : 
  SubstractZero<T1, U1> extends [] ? false : true : true : false;
```

Good Luck!

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/4425/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/4425/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->

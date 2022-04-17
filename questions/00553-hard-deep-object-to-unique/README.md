<!--info-header-start--><h1>Deep object to unique <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23deep-999" alt="#deep"/></h1><blockquote><p>by null <a href="https://github.com/uid11" target="_blank">@uid11</a></p></blockquote><p><a href="https://tsch.js.org/553/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

TypeScript has structural type system, but sometimes you want a function to accept only some previously well-defined unique objects (as in the nominal type system), and not any objects that have the required fields.

Create a type that takes an object and makes it and all deeply nested objects in it unique, while preserving the string and numeric keys of all objects, and the values of all properties on these keys.

The original type and the resulting unique type must be mutually assignable, but not identical. 

For example,

```ts
import { Equal } from "@type-challenges/utils"

type Foo = { foo: 2; bar: { 0: 1 }; baz: { 0: 1 } }

type UniqFoo = DeepObjectToUniq<Foo>

declare let foo: Foo
declare let uniqFoo: UniqFoo

uniqFoo = foo // ok
foo = uniqFoo // ok

type T0 = Equal<UniqFoo, Foo> // false
type T1 = UniqFoo["foo"] // 2
type T2 = Equal<UniqFoo["bar"], UniqFoo["baz"]> // false
type T3 = UniqFoo["bar"][0] // 1
type T4 = Equal<keyof Foo & string, keyof UniqFoo & string> // true
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/553/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/553/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
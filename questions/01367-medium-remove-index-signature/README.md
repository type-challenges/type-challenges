<!--info-header-start--><h1>Remove Index Signature <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> </h1><blockquote><p>by hiroya iizuka <a href="https://github.com/hiroyaiizuka" target="_blank">@hiroyaiizuka</a></p></blockquote><p><a href="https://tsch.js.org/1367/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Implement `RemoveIndexSignature<T>` , exclude the index signature from object types.

For example:

```

type Foo = {
  [key: string]: any;
  foo(): void;
}

type A = RemoveIndexSignature<Foo>  // expected { foo(): void }

```

answer

```ts
type Remove1<K> = K extends `${infer S}` ? S : never
type RemoveIndexSignature<T extends Record<keyof any, unknown>> = {
  [K in keyof T as Remove1<K>]: T[K];
}
```

as가 무엇인가??
아래와 같이 실행했을 경우 T1 에는 {}값이 들어가 예상된값이 나타나질 않는다.
```ts

type Remove1<K> = K extends `${infer S}` ? S : never
type RemoveIndexSignature<T extends Record<keyof any, unknown>> = {
  [K in Remove1<keyof T>]: T[K];
}

type Foo = {
  [key: string]: any
  foo(): void
}

type T1 = RemoveIndexSignature<Foo>;
```



<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/1367/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/1367/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->

<!--info-header-start--><h1>Capitalize <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/110/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

Implement `Capitalize<T>` which converts the first letter of a string to uppercase and leave the rest as-is.

For example

```ts
type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
```
answer
```ts

type Alphabet<S extends string, L extends string, U extends string> = S extends `${L}${infer K}` ? `${U}${K}` : S;

type A<S extends string> = Alphabet<S, "a", "A">;
type B<S extends string> = Alphabet<S, "b", "B">;
type C<S extends string> = Alphabet<S, "c", "C">;
type D<S extends string> = Alphabet<S, "d", "D">;
type E<S extends string> = Alphabet<S, "e", "E">;
type F<S extends string> = Alphabet<S, "f", "F">;
type G<S extends string> = Alphabet<S, "g", "G">;
type H<S extends string> = Alphabet<S, "h", "H">;
type I<S extends string> = Alphabet<S, "i", "I">;
type J<S extends string> = Alphabet<S, "j", "J">;
type K<S extends string> = Alphabet<S, "k", "K">;
type L<S extends string> = Alphabet<S, "l", "L">;
type M<S extends string> = Alphabet<S, "m", "M">;
type N<S extends string> = Alphabet<S, "n", "N">;
type O<S extends string> = Alphabet<S, "o", "O">;
type P<S extends string> = Alphabet<S, "p", "P">;
type Q<S extends string> = Alphabet<S, "q", "Q">;
type R<S extends string> = Alphabet<S, "r", "R">;
type S1<S extends string> = Alphabet<S, "s", "S">;
type T<S extends string> = Alphabet<S, "t", "T">;
type U<S extends string> = Alphabet<S, "u", "U">;
type V<S extends string> = Alphabet<S, "v", "V">;
type W<S extends string> = Alphabet<S, "w", "W">;
type X<S extends string> = Alphabet<S, "x", "X">;
type Y<S extends string> = Alphabet<S, "y", "Y">;
type Z<S extends string> = Alphabet<S, "z", "Z">;

// type MyCapitalize<S extends string> = T2<S>;
type MyCapitalize<S extends string> = Z<Y<X<W<V<U<T<S1<R<Q<P<O<N<M<L<K<J<I<H<G<F<E<D<C<B<A<S>>>>>>>>>>>>>>>>>>>>>>>>>>;

```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/110/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/110/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->

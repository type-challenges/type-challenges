<!--info-header-start--><h1>Typed Get <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/270/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

[lodash の get 関数](https://lodash.com/docs/4.17.15#get)は JavaScript でネストした値にアクセスする際にとても便利です。しかし、TypeScript でこのような関数を使うと型情報が失われてしまいます。
TypeScript4.1 の機能である[Template Literal Types](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/#template-literal-types)を使うと、`get`の適切な型付けが可能となります。
これを実装できるでしょうか?

例えば、

```ts
type Data = {
  foo: {
    bar: {
      value: 'foobar';
      count: 6;
    };
    included: true;
  };
  hello: 'world';
};
type A = Get<Data, 'hello'>; // 'world'
type B = Get<Data, 'foo.bar.count'>; // 6
type C = Get<Data, 'foo.bar'>; // { value: 'foobar', count: 6 }
```

この課題では、配列へのアクセスは必要ありません。

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/270/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/270/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->

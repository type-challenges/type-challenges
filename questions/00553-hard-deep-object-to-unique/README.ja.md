<!--info-header-start--><h1>Deep object to unique <img src="https://img.shields.io/badge/-%E4%B8%8A%E7%B4%9A-de3d37" alt="上級"/> <img src="https://img.shields.io/badge/-%23deep-999" alt="#deep"/></h1><blockquote><p>by null <a href="https://github.com/uid11" target="_blank">@uid11</a></p></blockquote><p><a href="https://tsch.js.org/553/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript&logoColor=white" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

TypeScript は構造的型システムを持っていますが、場合によっては(公称型システムのように)あらかじめ定義されたユニークなオブジェクトだけを受け入れ、required なフィールドを持つオブジェクトは受け入れないようにしたいこともあるでしょう。

引数にオブジェクトを受け取り、引数に含まれる全てのオブジェクトの文字列と数値のキー、およびこれらのキーの値のプロパティーを保持しながら、引数のオブジェクトとそれに含まれるネストしたオブジェクト全てをユニークにする型を実装します。

元の型と実装した型のアウトプットの型は相互に代入可能でなければなりませんが、同一の型であってはいけません。

例えば、

```ts
import { Equal } from '@type-challenges/utils';

type Foo = { foo: 2; bar: { 0: 1 }; baz: { 0: 1 } };

type UniqFoo = DeepObjectToUniq<Foo>;

declare let foo: Foo;
declare let uniqFoo: UniqFoo;

uniqFoo = foo; // ok
foo = uniqFoo; // ok

type T0 = Equal<UniqFoo, Foo>; // false
type T1 = UniqFoo['foo']; // 2
type T2 = Equal<UniqFoo['bar'], UniqFoo['baz']>; // false
type T3 = UniqFoo['bar'][0]; // 1
type T4 = Equal<keyof Foo & string, keyof UniqFoo & string>; // true
```

<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/553/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/553/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <!--info-footer-end-->

/*
  270 - Typed Get
  -------
  by Anthony Fu (@antfu) #上級 #utils #template-literal

  ### 質問

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

  > GitHubで確認する：https://tsch.js.org/270/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Get<T, K> = string

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Get<Data, 'hello'>, 'world'>>,
  Expect<Equal<Get<Data, 'foo.bar.count'>, 6>>,
  Expect<Equal<Get<Data, 'foo.bar'>, { value: 'foobar'; count: 6 }>>,
  Expect<Equal<Get<Data, 'foo.baz'>, false>>,

  Expect<Equal<Get<Data, 'no.existed'>, never>>,
]

type Data = {
  foo: {
    bar: {
      value: 'foobar'
      count: 6
    }
    included: true
  }
  'foo.baz': false
  hello: 'world'
}

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/270/answer/ja
  > 解答を見る：https://tsch.js.org/270/solutions
  > その他の課題：https://tsch.js.org/ja
*/

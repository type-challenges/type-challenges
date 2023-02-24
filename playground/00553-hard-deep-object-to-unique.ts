/*
  553 - Deep object to unique
  -------
  by null (@uid11) #上級 #deep

  ### 質問

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

  > GitHubで確認する：https://tsch.js.org/553/ja
*/

/* _____________ ここにコードを記入 _____________ */

type DeepObjectToUniq<O extends object> = any

/* _____________ テストケース _____________ */
import type { Equal, IsFalse, IsTrue } from '@type-challenges/utils'

type Quz = { quz: 4 }

type Foo = { foo: 2; baz: Quz; bar: Quz }
type Bar = { foo: 2; baz: Quz; bar: Quz & { quzz?: 0 } }

type UniqQuz = DeepObjectToUniq<Quz>
type UniqFoo = DeepObjectToUniq<Foo>
type UniqBar = DeepObjectToUniq<Bar>

declare let foo: Foo
declare let uniqFoo: UniqFoo

uniqFoo = foo
foo = uniqFoo

type cases = [
  IsFalse<Equal<UniqQuz, Quz>>,
  IsFalse<Equal<UniqFoo, Foo>>,
  IsTrue<Equal<UniqFoo['foo'], Foo['foo']>>,
  IsTrue<Equal<UniqFoo['bar']['quz'], Foo['bar']['quz']>>,
  IsFalse<Equal<UniqQuz, UniqFoo['baz']>>,
  IsFalse<Equal<UniqFoo['bar'], UniqFoo['baz']>>,
  IsFalse<Equal<UniqBar['baz'], UniqFoo['baz']>>,
  IsTrue<Equal<keyof UniqBar['baz'], keyof UniqFoo['baz']>>,
  IsTrue<Equal<keyof Foo, keyof UniqFoo & string>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/553/answer/ja
  > 解答を見る：https://tsch.js.org/553/solutions
  > その他の課題：https://tsch.js.org/ja
*/

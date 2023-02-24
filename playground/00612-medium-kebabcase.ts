/*
  612 - KebabCase
  -------
  by Johnson Chu (@johnsoncodehk) #中級 #template-literal

  ### 質問

  キャメルケースもしくはパスカルケースの文字列を、ケバブケースに置換する方を実装します。

  `FooBarBaz` -> `foo-bar-baz`

  例えば

  ```ts
  type FooBarBaz = KebabCase<"FooBarBaz">;
  const foobarbaz: FooBarBaz = "foo-bar-baz";

  type DoNothing = KebabCase<"do-nothing">;
  const doNothing: DoNothing = "do-nothing";
  ```

  > GitHubで確認する：https://tsch.js.org/612/ja
*/

/* _____________ ここにコードを記入 _____________ */

type KebabCase<S> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/612/answer/ja
  > 解答を見る：https://tsch.js.org/612/solutions
  > その他の課題：https://tsch.js.org/ja
*/

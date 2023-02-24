/*
  147 - C-printf Parser
  -------
  by Pig Fang (@g-plane) #上級 #template-literal

  ### 質問

  C 言語には`printf`という関数があり、以下のようにフォーマットして出力してくれます。

  ```c
  printf("The result is %d.", 42);
  ```

  この課題では、入力値の文字列をパースして`%d`や`%f`のようなフォーマットのプレースホルダーを抜き出します。
  例えば、もし入力文字列が`"The result is %d"`であるなら、パースした結果は`['dec']`というタプルになります。

  マッピングは以下となります。

  ```typescript
  type ControlsMap = {
    c: 'char';
    s: 'string';
    d: 'dec';
    o: 'oct';
    h: 'hex';
    f: 'float';
    p: 'pointer';
  };
  ```

  > GitHubで確認する：https://tsch.js.org/147/ja
*/

/* _____________ ここにコードを記入 _____________ */

type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ParsePrintFormat<''>, []>>,
  Expect<Equal<ParsePrintFormat<'Any string.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %%d.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %%%d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %f.'>, ['float']>>,
  Expect<Equal<ParsePrintFormat<'The result is %h.'>, ['hex']>>,
  Expect<Equal<ParsePrintFormat<'The result is %q.'>, []>>,
  Expect<Equal<ParsePrintFormat<'Hello %s: score is %d.'>, ['string', 'dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %'>, []>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/147/answer/ja
  > 解答を見る：https://tsch.js.org/147/solutions
  > その他の課題：https://tsch.js.org/ja
*/

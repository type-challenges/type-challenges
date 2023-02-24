/*
  527 - Append to object
  -------
  by Andrey Krasovsky (@bre30kra69cs) #中級 #object-keys

  ### 質問

  インターフェースに新しいフィールドを追加する型を実装します。この型は、3 つの引数を受け取り、新しいフィールドを持つオブジェクトを出力しなければなりません。

  例えば、

  ```ts
  type Test = { id: '1' };
  type Result = AppendToObject<Test, 'value', 4>; // expected to be { id: '1', value: 4 }
  ```

  > GitHubで確認する：https://tsch.js.org/527/ja
*/

/* _____________ ここにコードを記入 _____________ */

type AppendToObject<T, U, V> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type test1 = {
  key: 'cat'
  value: 'green'
}

type testExpect1 = {
  key: 'cat'
  value: 'green'
  home: boolean
}

type test2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
}

type testExpect2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
  home: 1
}

type test3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
}

type testExpect3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
  isMotherRussia: false | undefined
}

type cases = [
  Expect<Equal<AppendToObject<test1, 'home', boolean>, testExpect1>>,
  Expect<Equal<AppendToObject<test2, 'home', 1>, testExpect2>>,
  Expect<Equal<AppendToObject<test3, 'isMotherRussia', false | undefined>, testExpect3>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/527/answer/ja
  > 解答を見る：https://tsch.js.org/527/solutions
  > その他の課題：https://tsch.js.org/ja
*/

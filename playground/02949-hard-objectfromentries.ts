/*
  2949 - ObjectFromEntries
  -------
  by jiangshan (@jiangshanmeta) #上級 #object

  ### 質問

  Implement the type version of ```Object.fromEntries```

  For example:

  ```typescript
  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }

  type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];

  type result = ObjectFromEntries<ModelEntries> // expected to be Model
  ```

  > GitHubで確認する：https://tsch.js.org/2949/ja
*/

/* _____________ ここにコードを記入 _____________ */

type ObjectFromEntries<T> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type cases = [
  Expect<Equal<ObjectFromEntries<ModelEntries>, Model>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/2949/answer/ja
  > 解答を見る：https://tsch.js.org/2949/solutions
  > その他の課題：https://tsch.js.org/ja
*/

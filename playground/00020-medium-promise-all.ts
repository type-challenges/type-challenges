/*
  20 - Promise.all
  -------
  by Anthony Fu (@antfu) #中級 #array #promise

  ### 質問

  Promise ライクなオブジェクトの配列を受け取る関数 `PromiseAll` に型を付けてください。戻り値は `Promise<T>` である必要があります。ここで、`T` は解決された結果の配列です。

  ```ts
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });

  // expected to be `Promise<[number, 42, string]>`
  const p = PromiseAll([promise1, promise2, promise3] as const)
  ```

  > GitHubで確認する：https://tsch.js.org/20/ja
*/

/* _____________ ここにコードを記入 _____________ */

declare function PromiseAll(values: any): any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])
const promiseAllTest4 = PromiseAll<Array<number | Promise<number>>>([1, 2, 3])

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
  Expect<Equal<typeof promiseAllTest4, Promise<number[]>>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/20/answer/ja
  > 解答を見る：https://tsch.js.org/20/solutions
  > その他の課題：https://tsch.js.org/ja
*/

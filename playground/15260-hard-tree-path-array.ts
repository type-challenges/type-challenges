/*
  15260 - Tree path array
  -------
  by Neil Richter (@noook) #上級

  ### 質問

  Create a type `Path` that represents validates a possible path of a tree under the form of an array.

  Related challenges:
  - [Object key path](https://github.com/type-challenges/type-challenges/blob/main/questions/07258-hard-object-key-paths/README.md)

  ```ts
  declare const example: {
      foo: {
          bar: {
              a: string;
          };
          baz: {
              b: number
              c: number
          }
      };
  }

  // Possible solutions:
  // []
  // ['foo']
  // ['foo', 'bar']
  // ['foo', 'bar', 'a']
  // ['foo', 'baz']
  // ['foo', 'baz', 'b']
  // ['foo', 'baz', 'c']
  ```

  > GitHubで確認する：https://tsch.js.org/15260/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Path<T> = any

/* _____________ テストケース _____________ */
import type { ExpectExtends, ExpectFalse, ExpectTrue } from '@type-challenges/utils'

declare const example: {
  foo: {
    bar: {
      a: string
    }
    baz: {
      b: number
      c: number
    }
  }
}

type cases = [
  ExpectTrue<ExpectExtends<Path<typeof example['foo']['bar']>, ['a']>>,
  ExpectTrue<ExpectExtends<Path<typeof example['foo']['baz']>, ['b'] | ['c'] >>,
  ExpectTrue<ExpectExtends<Path<typeof example['foo']>, ['bar'] | ['baz'] | ['bar', 'a'] | ['baz', 'b'] | ['baz', 'c']>>,
  ExpectFalse<ExpectExtends<Path<typeof example['foo']['bar']>, ['z']>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/15260/answer/ja
  > 解答を見る：https://tsch.js.org/15260/solutions
  > その他の課題：https://tsch.js.org/ja
*/

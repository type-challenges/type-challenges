/*
  2828 - ClassPublicKeys
  -------
  by jiangshan (@jiangshanmeta) #上級 #utils

  ### 質問

  Implement the generic `ClassPublicKeys<T>` which returns all public keys of a class.

  For example:

  ```ts
  class A {
    public str: string
    protected num: number
    private bool: boolean
    getNum() {
      return Math.random()
    }
  }

  type publicKyes = ClassPublicKeys<A> // 'str' | 'getNum'
  ```

  > GitHubで確認する：https://tsch.js.org/2828/ja
*/

/* _____________ ここにコードを記入 _____________ */

type ClassPublicKeys = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

class A {
  public str: string
  protected num: number
  private bool: boolean
  constructor() {
    this.str = 'naive'
    this.num = 19260917
    this.bool = true
  }

  getNum() {
    return Math.random()
  }
}

type cases = [
  Expect<Equal<ClassPublicKeys<A>, 'str' | 'getNum'>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/2828/answer/ja
  > 解答を見る：https://tsch.js.org/2828/solutions
  > その他の課題：https://tsch.js.org/ja
*/

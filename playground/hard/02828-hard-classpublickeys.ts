/*
  2828 - ClassPublicKeys
  -------
  by jiangshan (@jiangshanmeta) #어려움 #utils

  ### 질문

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

  type publicKeys = ClassPublicKeys<A> // 'str' | 'getNum'
  ```

  > GitHub에서 보기: https://tsch.js.org/2828/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type ClassPublicKeys = any

/* _____________ 테스트 케이스 _____________ */
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

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/2828/answer/ko
  > 정답 보기: https://tsch.js.org/2828/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

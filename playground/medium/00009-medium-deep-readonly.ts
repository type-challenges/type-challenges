/*
  9 - Deep Readonly
  -------
  by Anthony Fu (@antfu) #中級 #readonly #object-keys #deep

  ### 質問

  オブジェクトのすべてのパラメーター（およびそのサブオブジェクトを再帰的に）を読み取り専用にする`DeepReadonly<T>`を実装します。

  この課題ではオブジェクトのみを扱っていると想定してください。配列、関数、クラスなどは考慮する必要はありません。しかし、可能な限り様々なケースをカバーすることで、自分自身に挑戦することができます。

  例えば

  ```ts
  type X = {
    x: {
      a: 1
      b: 'hi'
    }
    y: 'hey'
  }

  type Expected = {
    readonly x: {
      readonly a: 1
      readonly b: 'hi'
    }
    readonly y: 'hey'
  }

  type Todo = DeepReadonly<X> // should be same as `Expected`
  ```

  > GitHubで確認する：https://tsch.js.org/9/ja
*/

/* _____________ ここにコードを記入 _____________ */

type DeepReadonly<T> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<DeepReadonly<X1>, Expected1>>,
  Expect<Equal<DeepReadonly<X2>, Expected2>>,
]

type X1 = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        },
      ]
    }
  }
}

type X2 = { a: string } | { b: number }

type Expected1 = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey']
        },
      ]
    }
  }
}

type Expected2 = { readonly a: string } | { readonly b: number }

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/9/answer/ja
  > 解答を見る：https://tsch.js.org/9/solutions
  > その他の課題：https://tsch.js.org/ja
*/

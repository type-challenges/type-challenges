/*
  15260 - Tree path array
  -------
  by Neil Richter (@noook) #어려움

  ### 질문

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

  > GitHub에서 보기: https://tsch.js.org/15260/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Path<T> = any

/* _____________ 테스트 케이스 _____________ */
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

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/15260/answer/ko
  > 정답 보기: https://tsch.js.org/15260/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

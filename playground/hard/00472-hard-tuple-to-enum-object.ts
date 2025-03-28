/*
  472 - Tuple to Enum Object
  -------
  by Ryo Hanafusa (@softoika) #어려움 #tuple #template-literal

  ### 질문

  The enum is an original syntax of TypeScript (it does not exist in JavaScript). So it is converted to like the following form as a result of transpilation:
  ```js
  let OperatingSystem;
  (function (OperatingSystem) {
      OperatingSystem[OperatingSystem["MacOS"] = 0] = "MacOS";
      OperatingSystem[OperatingSystem["Windows"] = 1] = "Windows";
      OperatingSystem[OperatingSystem["Linux"] = 2] = "Linux";
  })(OperatingSystem || (OperatingSystem = {}));
  ```
  In this question, the type should convert a given string tuple to an object that behaves like an enum.
  Moreover, the property of an enum is preferably a pascal case.
  ```ts
  Enum<["macOS", "Windows", "Linux"]>
  // -> { readonly MacOS: "macOS", readonly Windows: "Windows", readonly Linux: "Linux" }
  ```
  If `true` is given in the second argument, the value should be a number literal.
  ```ts
  Enum<["macOS", "Windows", "Linux"], true>
  // -> { readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }
  ```

  > GitHub에서 보기: https://tsch.js.org/472/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Enum<T extends readonly string[], N extends boolean = false> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const OperatingSystem = ['macOS', 'Windows', 'Linux'] as const
const Command = ['echo', 'grep', 'sed', 'awk', 'cut', 'uniq', 'head', 'tail', 'xargs', 'shift'] as const

type cases = [
  Expect<Equal<Enum<[]>, {}>>,
  Expect<Equal<
  Enum<typeof OperatingSystem>,
  {
    readonly MacOS: 'macOS'
    readonly Windows: 'Windows'
    readonly Linux: 'Linux'
  }
  >>,
  Expect<Equal<
  Enum<typeof OperatingSystem, true>,
  {
    readonly MacOS: 0
    readonly Windows: 1
    readonly Linux: 2
  }
  >>,
  Expect<Equal<
  Enum<typeof Command>,
  {
    readonly Echo: 'echo'
    readonly Grep: 'grep'
    readonly Sed: 'sed'
    readonly Awk: 'awk'
    readonly Cut: 'cut'
    readonly Uniq: 'uniq'
    readonly Head: 'head'
    readonly Tail: 'tail'
    readonly Xargs: 'xargs'
    readonly Shift: 'shift'
  }
  >>,
  Expect<Equal<
  Enum<typeof Command, true>,
  {
    readonly Echo: 0
    readonly Grep: 1
    readonly Sed: 2
    readonly Awk: 3
    readonly Cut: 4
    readonly Uniq: 5
    readonly Head: 6
    readonly Tail: 7
    readonly Xargs: 8
    readonly Shift: 9
  }
  >>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/472/answer/ko
  > 정답 보기: https://tsch.js.org/472/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

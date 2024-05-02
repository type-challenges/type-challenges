/*
  472 - Tuple to Enum Object
  -------
  by Ryo Hanafusa (@softoika) #上級 #tuple #template-literal

  ### 質問

  enum は TypeScript 独自の文法です(JavaScript にはありません)。そのため、以下の形式にトランスパイルされます。

  ```js
  let OperatingSystem
  ;(function (OperatingSystem) {
    OperatingSystem[(OperatingSystem['MacOS'] = 0)] = 'MacOS'
    OperatingSystem[(OperatingSystem['Windows'] = 1)] = 'Windows'
    OperatingSystem[(OperatingSystem['Linux'] = 2)] = 'Linux'
  })(OperatingSystem || (OperatingSystem = {}))
  ```

  この問題では、文字列のタプルを enum と同じようなオブジェクトに変換する型を実装します。
  さらに、enum のプロパティはパスカルケースであることが好ましいです。

  ```ts
  Enum<['macOS', 'Windows', 'Linux']>
  // -> { readonly MacOS: "macOS", readonly Windows: "Windows", readonly Linux: "Linux" }
  ```

  第 2 引数に`true`が与えられた場合、値は数値リテラルとなります。

  ```ts
  Enum<['macOS', 'Windows', 'Linux'], true>
  // -> { readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }
  ```

  > GitHubで確認する：https://tsch.js.org/472/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Enum<T extends readonly string[], N extends boolean = false> = any

/* _____________ テストケース _____________ */
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

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/472/answer/ja
  > 解答を見る：https://tsch.js.org/472/solutions
  > その他の課題：https://tsch.js.org/ja
*/

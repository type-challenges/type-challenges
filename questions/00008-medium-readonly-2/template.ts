// TODO 泛型也可以给默认值
// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [P in K]: T[P]
// } & {
//   [P in keyof T as P extends K ? never : P]: T[P]
// }

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & {
  [P in MyExclude<keyof T, K>]: T[P]
}
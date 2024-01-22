type MyPick<T, K> = {
  [P in keyof T as P extends K? P: never]: T[P]
}

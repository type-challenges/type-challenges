type MyReadonly<T> = {
  readonly [key in keyof T]: T[key]
}

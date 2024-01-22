type MyOmit<T, K> = {
  [P in keyof T as P extends K ? never: P] : T[P]
}

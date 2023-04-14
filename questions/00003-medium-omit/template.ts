type MyOmit<T, P extends keyof T> = {
  [K in keyof T as K extends P ? never : K]: T[K]
}

export type MyPick<T extends object, K extends keyof T> = {
  [P in K]: T[P]
}

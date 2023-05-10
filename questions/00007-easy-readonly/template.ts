// type MyReadonly<T> = any
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
}

// 내 오답
// interface MyReadonly {
//   readonly T:string;
// }
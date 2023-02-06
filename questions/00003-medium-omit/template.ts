// TODO 如何将Pick及Exclude的基本写法连在一起写呢？
// TODO 解决：连写方式
type MyOmit1<T, K extends keyof T> = {
  [P in MyExclude<keyof T, K>]: T[P]
}

// type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

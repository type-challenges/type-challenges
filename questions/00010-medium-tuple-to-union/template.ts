// TODO 因为typeof后面接的是变量，所有不可以使用
// 想复杂了。。。。
type TupleToUnion<T extends any[]> = T[number]

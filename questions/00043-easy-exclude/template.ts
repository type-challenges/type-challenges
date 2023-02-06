// 提取T中可以分配给U的类型，一般提取联合类型的公共部分
type MyExclude<T, U> = T extends U ? never : T

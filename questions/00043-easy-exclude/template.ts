type MyExclude<T, U> = T extends U ? never : T

//type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

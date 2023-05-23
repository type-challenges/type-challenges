// type MyExclude<T, U> = any

type MyExclude<T, U> = T extends U ? never : T;

// 내 풀이
// type MyExclude<T, U> = T extends U ? never : T;

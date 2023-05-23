// type Length<T> = any

type Length<T extends readonly any[]> = T['length'];

// 내 풀이
// type Length<T extends {length: number}> = T;

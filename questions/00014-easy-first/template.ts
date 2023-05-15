// type First<T extends any[]> = any

type First<T extends any[]> = T extends [] ? never : T[0];

// 내 풀이
// type First<T extends PropertyKey[]> = T[0];

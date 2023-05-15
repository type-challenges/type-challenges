// type TupleToObject<T extends readonly any[]> = any

type TupleToObject<T extends readonly PropertyKey[]> = {
  [P in T[number]]: P;
}

// 내 풀이
// type TupleToObject<T extends readonly string[]> = {
//   [T:string]: T;
// }

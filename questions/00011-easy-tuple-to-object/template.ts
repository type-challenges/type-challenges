type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K
}

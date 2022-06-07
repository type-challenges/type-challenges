type TupleToObject<T extends readonly any[]> = {
  [key in T[number]]: key
}

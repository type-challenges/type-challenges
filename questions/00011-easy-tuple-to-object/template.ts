type TupleToObject<T extends readonly (string | number)[]> = {
  [K in T[number]]: K
}

// PropertyKey 内置
type TupleToObject2<T extends readonly PropertyKey[]> = {
  [K in T[number]]: K
}

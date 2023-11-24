type TupleToObject<TTuple extends readonly PropertyKey[]> = {
  [Key in TTuple[number]]: Key
}

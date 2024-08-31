type TupleToObject<T extends readonly (number|string|symbol)[]> = {
    [key in T[number]] : key 
}
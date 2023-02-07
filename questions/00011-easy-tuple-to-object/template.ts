const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

console.log(tuple[1])


type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [K in T[number]] : K
}


type tupleAsObject = TupleToObject<typeof tuple>
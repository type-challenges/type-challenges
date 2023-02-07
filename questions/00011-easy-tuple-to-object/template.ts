//const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
//type tupleAsObject = TupleToObject<typeof tuple>

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [K in T[number]] : K
}
type ReplaceFirst<A extends readonly unknown[], S, R> =
    A extends [infer First, ...infer Rest] ? First extends S ? [R, ...Rest] : [First, ...ReplaceFirst<Rest, S, R>] : A
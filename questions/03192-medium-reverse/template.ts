type Reverse<A extends any[]> =
    A extends [...infer Beginning, infer Last] ? [Last, ...Reverse<Beginning>] : A
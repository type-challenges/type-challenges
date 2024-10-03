type Absolute<A extends number | string> = `${A}` extends `-${infer N}`
    ? N
    : `${A}`;
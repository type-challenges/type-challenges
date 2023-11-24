type First<T extends any[]> = T extends [first: infer First, ...args: any] ? First : never

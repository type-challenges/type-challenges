type First<T extends any[]> = T extends [infer F, ...infer _] ? F : never

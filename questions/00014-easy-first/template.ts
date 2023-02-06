// TODO 未完成
type First<T extends any[]> = T extends [infer F, ...infer _P] ? F : never

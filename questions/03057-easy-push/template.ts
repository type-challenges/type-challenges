type Push<T extends any[], U> = T extends [...infer R] ? [...R, U] : never

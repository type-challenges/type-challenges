type First<T extends any[]> = T extends [] ? never : T[0]

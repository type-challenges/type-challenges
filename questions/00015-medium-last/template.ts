type Last<T extends any[]> = T extends [infer F, ...infer R]
  ? R["length"] extends 0
    ? F
    : Last<R>
  : never

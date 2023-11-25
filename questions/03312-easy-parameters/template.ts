type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...any: infer S
) => any
  ? S
  : any

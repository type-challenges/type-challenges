type MyReturnType<T extends Function> =
  T extends (...args: any) => infer R
    ? R
    : never

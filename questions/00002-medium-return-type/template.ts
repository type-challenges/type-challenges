type MyReturnType<T> = 
  T extends (...args: never[]) => infer R
    ? R
    : never
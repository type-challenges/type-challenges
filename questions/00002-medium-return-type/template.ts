type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never

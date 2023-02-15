type MyReturnType<K> = K extends (...arg: any) => infer Result ? Result : never

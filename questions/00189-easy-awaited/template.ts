type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R> :
    T extends { then: (onfulfilled: (arg: number) => any) => any } ? number : T;

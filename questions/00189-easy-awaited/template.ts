type MyAwaited<T> = T extends Promise<infer R> ? Awaited<R> : T

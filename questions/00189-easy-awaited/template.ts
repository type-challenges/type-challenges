// type MyAwaited<T> = any

type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R> : T;

// 내 풀이
// type MyAwaited<T> = typeof <T>;

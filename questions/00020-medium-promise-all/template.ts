type SimpleMyAwaited<T> = T extends Promise<infer R> ? R : T

declare function PromiseAll<T extends any[]>(promises: readonly [...T]): Promise<{
    [Index in keyof T]: SimpleMyAwaited<T[Index]>
}>
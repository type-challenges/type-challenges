type ExampleType = Promise<string | number>
type Result = MyAwaited<ExampleType> // string


// infers type from deeply nested promise
type MyAwaited<T extends Promise<unknown>> = 
T extends Promise<infer R> ? (R extends Promise<unknown> ? MyAwaited<R> : R) : never;


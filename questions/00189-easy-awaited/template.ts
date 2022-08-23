/*
If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?

For example: if we have Promise<ExampleType> how to get ExampleType?

type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string
*/

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : never

// First (or last), if nothing exists assign never - should never happen - it must be a Promise
// take some unknown types and create T by extending from the generic Promise and inferring the Promise types
// if something exists U will extend the inferred types from the Promise. This Promise is a wrapper
// if the inferred types are also a Promise, assign MyAwaited to U (unwrap those inferred inner types)
// otherwise assign them U

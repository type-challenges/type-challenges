/*
Type the function PromiseAll that accepts an array of PromiseLike objects.
The returning value should be Promise<T> where T is the resolved result array.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const)
*/

declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{
  [K in keyof T]: T[K] extends Promise<infer R>
    ? R
    : T[K]
}>
// this only works in an ambient context - i.e. declare function
// readonly is required because the test cases casted tuples as const
// T will be populated with an unknown arr
// the values will be a readonly arr
// Grab each key of T. Each key will be populated with the inferred values of a Promise
// return those values if true
// otherwise return the key of T

/*
Chainable options are commonly used in Javascript. But when we switch to TypeScript, can you properly type it?

In this challenge, you need to type an object or a class - whatever you like - to provide two function option(key, value) and get(). In option, you can extend the current config type by the given key and value. We should about to access the final result via get.

For example

declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// expect the type of result to be:
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}
You don't need to write any js/ts logic to handle the problem - just in type level.

You can assume that key only accepts string and the value can be anything - just leave it as-is. Same key won't be passed twice.
*/

type Chainable<T = {}> = {
  option<Key extends string, Value>(
    key: Key,
    value: Key extends keyof T
      ? Value extends T[Key] ? never : Value
      : Value
  ): Chainable<Omit<T, Key> & Record<Key, Value>>
  get(): T
}

// Accept Generic which is an object
// an option has a key that is a string, and a value
// its arguments are key: Key, and Value
// if the Value is not constrained to the keyof T return the Value
// Otherwise if the Value is constrained to the keys of T
// If true, and the Value exists return never, otherwise return Value
// Run option through Chainable, Omit the Keys of T and create a Key, Value map with Record

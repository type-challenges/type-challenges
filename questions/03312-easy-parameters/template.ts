/*
Implement the built-in Parameters generic without using it.

For example:

const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo>// [arg1: string, arg2: number]
*/

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer U) => unknown ? U : never

/* My Parameters will accept a generic type of arguments.
It will return any types

It equals a generic type of arguments that will be inferred (recursively added) and it will output anything (`unknown`).
If it has something to output it will be the inferred U arguments.
Otherwise, it will return `never` aka nothing.
*/

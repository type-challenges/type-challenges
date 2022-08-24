/*
For given function type Fn, and any type A, create a generic type which will take Fn as the first argument, A as the second,
and will produce function type G which will be the same as Fn but with appended argument A as a last one.

For example,
type Fn = (a: number, b: string) => number

type Result = AppendArgument<Fn, boolean>
// expected be (a: number, b: string, x: boolean) => number
*/
type AppendArgument<Fn, A> = Fn extends (...args: infer T) => infer R
  ? (...args: [...T, A]) => R
  : never

// Fn extends a function with inferred arg types and inferred return
// If true, spread the args which are an array of the original T args plus the new A arg
// Return the original inferred R
// Else - it doesn't matter. It returns nothing.

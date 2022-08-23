/*
Implement a generic MyReadonly2<T, K> which takes two type arguments T and K.

K specifies the set of properties of T that should set to Readonly.
When K is not provided, it should make all properties readonly just like the normal Readonly<T>.

For example

interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK
 */

type MyReadonly2<T, K extends keyof T = keyof T> = {
  [U in Exclude<keyof T, K>]: T[U]
} & {
  readonly [U in K]: T[U]
}
// return a union of string literal types by constraining K's keys to T's.
// then assign K's keys to those constraints
// for each key that isn't excluded in T, assign to key of U
// Output U's keys into T
// And
// for every key of K in U, make it readonly
// then assign that value to T
